const { to, ReE, ReS } = require('../services/util.service');
const { Space, Subscription, Notification, Memory, User } = require('../models');
const ObjectId = require('mongodb').ObjectId;


const getNotifications = async function (req, res) {
    const { id } = req.params;
    const user = req.user;
    let err, notifications;
    const query = { 'user': ObjectId(user._id) };
    if (id !== 'all') {
        if (!ObjectId.isValid(id)) return ReE(res, 'NotificationInvalid', 500);
        query._id = ObjectId(id);
    }
    [err, notifications] = await to(Notification.find(query));
    if (err) return ReE(res, 'DatabaseError', 200);
    if (!notifications) return ReE(res, 'AccessDenied', 403);
    return ReS(res, { message: 'Successfully get notifications.', notifications }, 201);
};


const readNotification = async function (req, res) {
    const { id } = req.params;
    const user = req.user;
    let err;
    const query = {
        $and: [
            { 'user': ObjectId(user._id) },
        ]
    }
    if (id !== 'all') {
        if (!ObjectId.isValid(id)) return ReE(res, 'NotificationInvalid', 500);
        query._id = ObjectId(id);
    }
    [err] = await to(Notification.updateOne(
        query,
        {
            status: 'READ'
        }));
    if (err) {
        return ReE(res, 'DatabaseError');
    }
    return ReS(res, { message: 'Successfully read notification.' }, 200);
};


const deleteNotification = async function (req, res) {
    const { id } = req.params;
    const user = req.user;
    let err;
    const query = {
        $and: [
            { 'user': ObjectId(user._id) },
        ]
    }
    if (id !== 'all') {
        if (!ObjectId.isValid(id)) return ReE(res, 'NotificationInvalid', 500);
        query._id = ObjectId(id);
    }
    [err] = await to(Notification.deleteMany(
        query,
        {
            status: 'READ'
        }));
    if (err) {
        return ReE(res, 'DatabaseError');
    }
    return ReS(res, { message: 'Successfully deleted notification.' }, 200);
};

module.exports = {
    getNotifications,
    readNotification,
    deleteNotification
};
