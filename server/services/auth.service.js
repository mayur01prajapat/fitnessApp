const { User } = require('../models');
const validator = require('validator');
const { to, TE } = require('../services/util.service');

const createUser = async function (userInfo) {
    const { email, password, name, height, weight, age } = userInfo;
    if (!email) TE('Enter email for registration.');

    let err, user;
    [err, user] = await to(User.findOne({ email }));
    if (err) TE('Database is not responding. Try later.');
    if (user) {
        TE('This email is already in use.');
    } else {
        const newUser = {
            name,
            email,
            password,
            height,
            weight,
            age
        };

        if (validator.isEmail(email)) {
            let err, user;
            [err, user] = await to(User.create(newUser));
            if (err) TE('Database is not responding. Try later.');
            return user;
        } else {
            TE('Email is invalid.');
        }
    }
};

const authUser = async function (userInfo) {
    //returns token
    const { email, password } = userInfo;

    if (!email) TE('InvalidEmail');
    if (!password) TE('InvalidPassword');

    let user;
    if (validator.isEmail(email)) {
        [err, user] = await to(User.findOne({ email }));
        if (err) TE(err.message);
    }

    if (!user) TE('NoEmail');
    [err, user] = await to(user.comparePassword(userInfo.password));
    if (err) TE(err.message);
    return user;
};

module.exports = { createUser, authUser };
