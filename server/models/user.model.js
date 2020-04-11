const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt_p = require('bcrypt-promise');

const CONFIG = require('../config/config');
const { TE, to } = require('../services/util.service');
const RefreshToken = require('../models/refreshToken.model');
const { LOGIN_TYPE } = require('../constants');

const { FACEBOOK } = LOGIN_TYPE

let UserSchema = mongoose.Schema({
    name: String,
    age: Number,
    height:Number,
    weight: Number,
    authId: { type: String },
    loginType: { type: String, enum: [FACEBOOK] },
    email: {
        type: String,
        lowercase: true,
        trim: true,
    },
    password: { type: String },
    tokens: [{
        token: String,
        device: String
    }],
    subscription_date: { type: Date, default: Date.now },
    avatar: String
}, { timestamps: true });

UserSchema.pre('save', async function (next) {
    if (!this.password) return;
    if (this.isModified('password') || this.isNew) {
        let err, salt, hash;
        [err, salt] = await to(bcrypt.genSalt(10));
        if (err) TE(err.message, true);
        [err, hash] = await to(bcrypt.hash(this.password, salt));
        if (err) TE(err.message, true);
        this.password = hash;
    } else {
        return next();
    }
});

UserSchema.methods.comparePassword = async function (pw) {
    let err, pass;
    if (!this.password) TE('NoPassword');
    [err, pass] = await to(bcrypt_p.compare(pw, this.password));
    if (err) TE(err);
    if (!pass) TE('InvalidCredentials');
    return this;
};

UserSchema.methods.getJWT = async function () {
    const tokens = {};

    //Refresh token
    let err, info;
    [err, info] = await to(RefreshToken.deleteMany({ user: this._id }));
    if (err) TE(err.message, true);
    let refresh_token;
    [err, refresh_token] = await to(RefreshToken.create({
        user: this._id,
        expiresIn: parseInt(CONFIG.jwt_refresh_expiration)
    }));
    if (err) TE(err.message, true);
    if (refresh_token) {
        tokens.refresh_token = refresh_token._id
    }

    //Access token
    let expiration_time = parseInt(CONFIG.jwt_expiration);
    tokens.access_token = `Bearer ${jwt.sign(
        { user: this._id },
        CONFIG.jwt_encryption,
        { expiresIn: expiration_time }
    )}`;

    return tokens;
};

UserSchema.methods.toWeb = function () {
    let json = this.toJSON();
    json.id = this._id;
    return json;
};

module.exports = mongoose.model('User', UserSchema);


