const fs = require('fs');
const path = require('path');
const aws = require('aws-sdk');
const formidable = require('formidable');
const ObjectId = require('mongodb').ObjectId;
const ffmpeg = require('fluent-ffmpeg');
var ffprobe = require('ffprobe-static');
ffmpeg.setFfprobePath(ffprobe.path);
const sharp = require('sharp');
const fetch = require('node-fetch');

const validator = require('validator');

const CONFIG = require('../config/config');
const { Space, Hash, Memory, User, Notification, Subscription } = require('../models');
const generateHash = require('../helpers/generateHash');
const { transporter } = require('../helpers/transporter');
const checkSubscription = require('../helpers/checkSubscription');
const { to, ReE, ReS } = require('../services/util.service');

aws.config.update({
    accessKeyId: CONFIG.aws_key,
    secretAccessKey: CONFIG.aws_secret
});

const s3 = new aws.S3({
    endpoint: new aws.Endpoint('sfo2.digitaloceanspaces.com')
});

/**
 * @api {post} /space/create Create default space
 * @apiName EverPresent
 * @apiGroup Space
 * @apiVersion 1.0.0
 *
 * @apiHeader {String} Content-Type Type of body content.
 * @apiHeaderExample {json} Content-Type-Example:
 * { "Content-Type": "application/json }
 *
 * @apiHeader {String} Authorization Authorization token.
 * @apiHeaderExample {json} Authorization-Example:
 * { "Authorization": "Bearer df2s124f4sa4fsa...jksa32452f" }
 *
 * @apiSuccess {String} message Success message.
 * @apiSuccess {Object} space  User info.
 * @apiSuccess {Boolean} success Success indicator.
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "message": "Space successfully created.",
 *   "space": {
 *       "moderator": {
 *           "approved": true,
 *           "verified": true,
 *           "user": "5c7fd6c230a5dd501e5ef065"
 *       },
 *       "memories": [],
 *       "_id": "5c7fd6dc30a5dd501e5ef067",
 *       "owner": "5c7fd6c230a5dd501e5ef065",
 *       "readers": [],
 *       "createdAt": "2019-03-06T14:19:08.260Z",
 *       "updatedAt": "2019-03-06T14:19:08.260Z",
 *       "__v": 0
 *   },
 *   "success": true
 *}
 *
 * @apiError DatabaseError Database error.
 *
 * @apiErrorExample {json} Error-Response:
 * {
 *   error: "DatabaseError"
 * }
 */
const create = async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    const { user } = req;
    let err, space;
    const query = {
        $or: [
            { 'owner': ObjectId(user._id) }
        ]
    };
    [err, space] = await to(Space.findOne(query));
    if (err) return ReE(res, 'DatabaseError', 500);
    if (space) {
        if (space.readers.length > 0) return ReS(res, { message: 'Space already exists.', space, showIntro: false }, 200);
        else return ReS(res, { message: 'Space already exists.', space, showIntro: true }, 200);
    }
    [err, space] = await to(Space.create({
        owner: user,
        moderator: {
            user,
            roleName: user.name,
            approved: true,
            verified: true
        }
    }));
    if (err) return ReE(res, 'DatabaseError');
    if (space) return ReS(res, { message: 'Space successfully created.', space, showIntro: true }, 201);
};

/**
 * @api {get} /:spaceId/:memoryId Route to get memory.
 * @apiName EverPresent
 * @apiGroup Space
 * @apiVersion 1.0.0
 * @apiDescription If memoryId === 'all' returns all memories for space.
 *
 * @apiHeader {String} Content-Type Type of body content.
 * @apiHeaderExample {json} Content-Type-Example:
 * { "Content-Type": "application/json }
 *
 * @apiHeader {String} Authorization Authorization token.
 * @apiHeaderExample {json} Authorization-Example:
 * { "Authorization": "Bearer df2s124f4sa4fsa...jksa32452f" }
 *
 * @apiSuccess {String} message Success message.
 * @apiSuccess {Array} memories Requested memories array.
 * @apiSuccess {Boolean} success Success indicator.
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "message": "Successfully get memories",
 *   "memories": [
 *       {
 *           "_id": "5c80f9b9575a33190803e85e",
 *           "url": "sfo2.digitaloceanspaces.com/evrprsntspace/fee2547437869874bf7b3ebeb315e703-Story-Flow.mp4",
 *           "description": "Some video description.",
 *           "createdAt": "2019-03-07T11:00:09.410Z",
 *          "updatedAt": "2019-03-07T11:00:09.410Z",
 *          "__v": 0
 *       }
 *   ],
 *  "success": true
 * }
 *
 * @apiError DatabaseError Database error.
 * @apiError SpaceInvalid Space doesnt exist.
 * @apiError AccessDenied You are not owner of requested space.
 * @apiError MemoryInvalid Memory doesnt exist.
 *
 * @apiErrorExample {json} Error-Response:
 * {
 *   error: "DatabaseError"
 * }
 */
const getMemory = async function (req, res) {
    const { spaceId, memoryId } = req.params;
    const user = req.user;
   
    let err, space;
    [err, space] = await to(Space.findById(spaceId).populate('memories'));
    if (err) return ReE(res, 'DatabaseError', 500);
    if (!space) return ReE(res, 'SpaceInvalid', 500);
    const id = user._id.toString();
    if (
        space.owner.toString() !== id
        && (space.moderator.user && space.moderator.user.toString() !== id)
        && !space.moderators.find(({ user }) => user.toString() !== id)
        && !space.readers.find(({ user }) => user.toString() !== id)
    ) {
        return ReE(res, 'AccessDenied', 403);
    }
    let memories;
    if (memoryId === 'all') {
        memories = space.memories;
    } else {
        const memory = space.memories.find(m => m._id.toString() === memoryId);
        if (!memory) return ReE(res, 'MemoryInvalid', 500);
        memories = [memory];
    }
    memories.forEach((memory) => {
        if (memory.subscribers.findIndex((obj) => obj.user.toString() === user._id.toString()) !== -1) {
            if (memory.subscribers.findIndex((obj) => obj.user.toString() === user._id.toString()).subscribed) {
                memory.isLocked = false;
            } else {
                memory.isLocked = true;
            }
        } else {
            memory.isLocked = true;
        }
    })
    return ReS(res, { message: 'Successfully get memories', memories }, 201);
};

module.exports = {
    create,
    getMemory,
};
