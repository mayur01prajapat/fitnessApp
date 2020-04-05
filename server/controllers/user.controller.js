const fetch = require('node-fetch');

const { User, RefreshToken } = require('../models');
const authService = require('../services/auth.service');
const { to, ReE, ReS } = require('../services/util.service');
const { LOGIN_TYPE } = require('../constants');

/**
 * @api {post} /user/register Register user account
 * @apiName EverPresent
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiHeader {String} Content-Type Type of body content.
 * @apiHeaderExample {json} Content-Type-Example:
 * { "Content-Type": "application/json }
 *
 * @apiParam {String} email Users email.
 * @apiParam {String} password Users password.
 * @apiParam {String} name Users name.
 *
 * @apiSuccess {String} message Success message.
 * @apiSuccess {Object} user  User info.
 * @apiSuccess {Object} tokens  Access and Refresh tokens.
 * @apiSuccess {Boolean} success Success indicator.
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *   message: "Registration is successful",
 *   user: {
 *       _id: "5c7d27d56b03c73b73b4362b",
 *       name: "someone",
 *       email: "example@example.com",
 *       password: "$2b$10$JYsMYrIYiRqiA0yopgyipusLAQ5c9a4TcHSoZ.MrEOVMVx6WgCSyq",
 *       tokens: [],
 *       createdAt: "2019-03-04T13:27:49.764Z",
 *       updatedAt: "2019-03-04T13:27:49.764Z",
 *       __v: 0,
 *       id: "5c7d27d56b03c73b73b4362b"
 *   },
 *   tokens: {
 *       refresh_token: "Bearer 5c7sd...b03c73b73c",
 *       access_token: "Bearer eyJhb...tPtLSalWkk"
 *   },
 *   success: true
 * }
 *
 * @apiError InvalidEmail Enter email for registration
 * @apiError InvalidName Enter name for registration
 * @apiError InvalidPassword Enter password for registration
 *
 * @apiErrorExample {json} Error-Response:
 * {
 *   error: "InvalidEmail",
 *   success: false
 * }
 */
const create = async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    const { email, password, name } = req.body;
    if (!email) return ReE(res, 'InvalidEmail');
    if (!name) return ReE(res, 'InvalidName');
    if (!password) {
        return ReE(res, 'InvalidPassword');
    } else {
        let err, user, tokens;
        [err, user] = await to(authService.createUser({ ...req.body }));
        if (err) return ReE(res, err);
        [err, tokens] = await to(user.getJWT());
        if (err) return ReE(res, err);
        return ReS(res, { message: 'Registration is successful', user: user.toWeb(), tokens }, 201);
    }
};


/**
 * @api {post} /user/login Login user account
 * @apiName EverPresent
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiHeader {String} Content-Type Type of body content..
 * @apiHeaderExample {json} Content-Type-Example:
 * { "Content-Type": "application/json }
 *
 * @apiParam {String} email Users email.
 * @apiParam {String} password Users password.
 *
 * @apiSuccess {Object} user  User info.
 * @apiSuccess {Object} tokens  Access and Refresh tokens.
 * @apiSuccess {Boolean} success Success indicator.
 *
 * @apiSuccessExample {json} Success-Response:
 *{
 *   tokens: {
 *       "refresh_token": "Bearer 5c7d5a630...69e09a3adc",
 *       "access_token": "Bearer eyJhbG...sPiD73Xcc"
 *   },
 *   user: {
 *       _id: "5c7d27d56b03c73b73b4362b",
 *       name: "Someone",
 *       email: "someone@somemail.com",
 *       password: "$2b$10$JY...MVx6WgCSyq",
 *       tokens: [],
 *       createdAt: "2019-03-04T13:27:49.764Z",
 *       updatedAt: "2019-03-04T13:27:49.764Z",
 *       __v: 0,
 *       id: "5c7d27d56b03c73b73b4362b"
 *   },
 *   success: true
 *}
 *
 * @apiError InvalidEmail Enter email for registration.
 * @apiError InvalidPassword Enter password for registration.
 * @apiError NoEmail Email for this account doesn't set.
 * @apiError NoPassword Password for this account doesn't set.
 * @apiError InvalidCredentials Invalid email or password.
 *
 * @apiErrorExample {json} Error-Response:
 * {
 *   error: "InvalidEmail",
 *   success: false
 * }
 */
const login = async function (req, res) {
    let err, user, tokens;
    [err, user] = await to(authService.authUser(req.body));
    if (err) return ReE(res, err);
    [err, tokens] = await to(user.getJWT());
    if (err) return ReE(res, err);
    return ReS(res, { tokens, user: user.toWeb() });
};

/**
 * @api {post} /user/oauth/facebook Login and registration via facebook oauth.
 * @apiName EverPresent
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiHeader {String} Content-Type Type of body content..
 * @apiHeaderExample {json} Content-Type-Example:
 * { "Content-Type": "application/json }
 *
 * @apiParam {String} access_token Facebook oauth flow token.
 * @apiParam {String} [id] Invited user id from deeplink data.
 *
 * @apiSuccess {Object} user User info.
 * @apiSuccess {Object} tokens  Access and Refresh tokens.
 * @apiSuccess {Boolean} success Success indicator.
 *
 * @apiSuccessExample {json} Success-Response:
 *{
 *   "tokens": {
 *      "refresh_token": "Bearer 5c7fbc...2073a35f",
 *      "access_token": "Bearer eyJh....i8cW33YOhH6I"
 *   },
 *   "user": {
 *       "_id": "5c7fbc0ed1f8ab3e2073a35e",
 *       "name": "Some One",
 *       "email": "",
 *       "tokens": [],
 *       "createdAt": "2019-03-06T12:24:46.346Z",
 *       "updatedAt": "2019-03-06T12:24:46.346Z",
 *       "__v": 0,
 *       "id": "5c7fbc0ed1f8ab3e2073a35e"
 *   },
 *   "success": true
 *}
 *
 * @apiError InternalOAuthError Inactive oauth token provided.
 * @apiError InvalidLink Invalid invitation link.
 * @apiError DataBaseError Database error.
 * @apiError ServerError Server error.
 *
 * @apiErrorExample {json} Error-Response:
 * {
 *   "error": "InternalOAuthError",
 *   "success": false
 * }
 */
const OAuth = async (req, res) => {
    let err, tokens;
    let { user, profile } = req.user;
    const { id } = req.body;

    //Login
    if (user) {
        [err, tokens] = await to(user.getJWT());
        if (err) return ReE(res, err);
        return ReS(res, { tokens, user: user.toWeb() });
    }

    //Register
    const email = profile.emails[0].value;
    let newUser;
    if (id) {
        [err, newUser] = await to(User.findById(id));
        if (err) return ReE(res, err);
        if (!newUser) return ReE(res, "InvalidLink");
        newUser.name = profile.displayName;
        newUser.email = email;
    } else {
        let avatar = undefined;
        await fetch(`https://graph.facebook.com/${profile.id}/picture?type=large&redirect=false&width=130&height=130`)
            .then(res => res.json())
            .then((res) => {
                // res.data.is_silhouette to check if default
                avatar = res.data.url
            });
        newUser = new User({
            authId: profile.id,
            loginType: LOGIN_TYPE.FACEBOOK,
            name: profile.displayName,
            email,
            avatar
        });
    }
    [err, user] = await to(newUser.save());
    if (err) return ReE(res, "DataBaseError");
    [err, tokens] = await to(user.getJWT());
    if (err) return ReE(res, "ServerError");
    return ReS(res, { tokens, user: newUser.toWeb() });
};


/**
 * @api {get} /user Get user info.
 * @apiName EverPresent
 * @apiGroup User
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
 * @apiSuccess {Object} user User info.
 * @apiSuccess {Boolean} success Success indicator.
 *
 * @apiSuccessExample {json} Success-Response:
 *{
 *   "user": {
 *       "_id": "5c7fbeb30c48a75b0e25a7a9",
 *       "name": "Someonse",
 *       "email": "sosmseone@ssomemail.com",
 *       "password": "$2b$10$6l3S.kfyIE75toMcJlm2zOqUU9IiTwh3joZBGSbG59HxUlQjx83pC",
 *       "tokens": [],
 *       "createdAt": "2019-03-06T12:36:03.535Z",
 *       "updatedAt": "2019-03-06T12:36:03.535Z",
 *       "__v": 0,
 *       "id": "5c7fbeb30c48a75b0e25a7a9"
 *   },
 *   "success": true
 *}
 *
 * @apiError DataBaseError Database error.
 * @apiError ServerError Server error.
 */
const get = async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    let user = req.user;
    return ReS(res, { user: user.toWeb() });
};

const update = async function (req, res) {
    let err, user, data;
    data = req.body;
    user = req.user;

    user.set(data);

    [err, user] = await to(user.save());
    if (err) {
        console.log(err, user);
        if (err.message.includes('E11000')) {
            if (err.message.includes('email')) {
                err = 'Email is already in use.';
            } else {
                err = 'Duplicate key entry';
            }
        }
        return ReE(res, err);
    }
    return ReS(res, { message: 'Updated User: ' + user.email });
};

/**
 * @api {post} /users/refresh/:token Refresh user token.
 * @apiName EverPresent
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiHeader {String} Content-Type Type of body content.
 * @apiHeaderExample {json} Content-Type-Example:
 * { "Content-Type": "application/json }
 *
 *
 * @apiSuccess {Object} tokens User new tokens.
 * @apiSuccess {Boolean} success Success indicator.
 *
 * @apiSuccessExample {json} Success-Response:
 *{
 *   "tokens": {
 *       "refresh_token": "Bearer 5c7fbc...2073a35f",
 *       "access_token": "Bearer eyJh....i8cW33YOhH6I"
 *   },
 *   "user": {
 *       "_id": "5c7fbeb30c48a75b0e25a7a9",
 *       "name": "Someonse",
 *       "email": "sosmseone@ssomemail.com",
 *       "password": "$2b$10$6l3S.kfyIE75toMcJlm2zOqUU9IiTwh3joZBGSbG59HxUlQjx83pC",
 *       "tokens": [],
 *       "createdAt": "2019-03-06T12:36:03.535Z",
 *       "updatedAt": "2019-03-06T12:36:03.535Z",
 *       "__v": 0,
 *       "id": "5c7fbeb30c48a75b0e25a7a9"
 *   },
 *   "success": true
 *}
 */
const refreshToken = async function (req, res) {
    let { token } = req.params;
    let err;
    [err, token] = await to(RefreshToken.findById(token).populate('user'));
    if (err) return res.status(504).send({ message: "Database error, try later" });
    if (!token) return res.status(401).send({ message: "Token is invalid" });
    if (Date.now() - token.createdAt.getTime() > token.expiresIn) {
        return res.status(401).send({ message: "Token is out of date" });
    }
    let tokens;
    [err, tokens] = await to(token.user.getJWT());
    if (err) return ReE(res, err);
    return ReS(res, { tokens, user: token.user.toWeb() }, 201);
};

/**
 * @api {post} /user/setToken Add firebase token to user.
 * @apiName EverPresent
 * @apiGroup User
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
 * @apiSuccess {Object} tokens User new tokens.
 * @apiSuccess {Boolean} success Success indicator.
 *
 * @apiSuccessExample {json} Success-Response:
 *{
 *   "user": {
 *       "_id": "5c7fbeb30c48a75b0e25a7a9",
 *       "name": "Someonse",
 *       "email": "sosmseone@ssomemail.com",
 *       "password": "$2b$10$6l3S.kfyIE75toMcJlm2zOqUU9IiTwh3joZBGSbG59HxUlQjx83pC",
 *       "tokens": [],
 *       "createdAt": "2019-03-06T12:36:03.535Z",
 *       "updatedAt": "2019-03-06T12:36:03.535Z",
 *       "__v": 0,
 *       "id": "5c7fbeb30c48a75b0e25a7a9"
 *   },
 *   "success": true
 *}
 * @apiError No token specified.
 * @apiErrorExample {json} Error-Response:
 * {
 *   "error": "DataBaseError",
 *   "success": false
 * }
 */
const setToken = async function (req, res) {
    const { token, device } = req.body;
    let err, user;
    if (!token) {
        ReE(res, { message: "No token specified" }, 400);
    }
    if (!device) {
        ReE(res, { message: "No device specified" }, 400);
    }
    [err, user] = await to(User.findByIdAndUpdate(
        req.user._id,
        {
            $pull: {
                tokens: { device }
            }
        }
    ));
    if (err) return ReE(res, { message: "Database error, try later" }, 504);
    [err, user] = await to(User.findByIdAndUpdate(
        req.user._id,
        {
            $push: {
                tokens: {
                    token,
                    device
                }
            }
        },
        { new: true }
    ));
    if (err) return ReE(res, { message: "Database error, try later" }, 504);
    return ReS(res, { user: user.toWeb() }, 201);
};

/**
 * @api {post} /user/logout Route to clear token after logout.
 * @apiName EverPresent
 * @apiGroup User
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
 * @apiSuccess {Object} message Status message.
 * @apiSuccess {Boolean} success Success indicator.
 *
 * @apiSuccessExample {json} Success-Response:
 *{
 *   "message": "Successfully remove token.",
 *   "success": true
 *}
 *
 * @apiErrorExample {json} Error-Response:
 * {
 *   "error": "DataBaseError",
 *   "success": false
 * }
 */
const logout = async function (req, res) {
    const { device } = req.body;
    let err, user,info;
    [err, user] = await to(User.findByIdAndUpdate(
        req.user._id,
        {
            $pull: {
                tokens: { device }
            }
        }
    ));
    [err, info] = await to(RefreshToken.deleteMany({ user: req.user._id }));
    if (err) return res.status(504).send({ message: "Database error, try later" });
    return ReS(res, { message: "Successfully remove token." }, 201);
};

module.exports = { create, login, OAuth, get, update, refreshToken, setToken, logout };
