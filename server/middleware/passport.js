const {User} = require('../models');
const CONFIG = require('../config/config');
const {to} = require('../services/util.service');
const {ExtractJwt} = require('passport-jwt');
const validator = require('validator');

const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook-token');

module.exports = function (passport) {
    // JWT Strategy
    passport.use(
        'jwt',
        new JwtStrategy({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: CONFIG.jwt_encryption
        }, async function (jwt_payload, done) {
            let err, user;
            [err, user] = await to(User.findById(jwt_payload.user));
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        })
    );


    //Local Strategy
    passport.use(
        'local',
        new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
        }, async (email, password, done) => {
            if (!email || !password || !validator.isEmail(email)) {
                done(new Error("Wrong password!"), false);
            }

            let err, user;
            [err, user] = await to(User.findOne({email}));
            if (!user) done(new Error("There is no such account."), false);
            if (err) done(err, false);
            [err, user] = await to(user.comparePassword(password));
            if (!user) done(new Error("Wrong password."), false);
            done(null, user);
        })
    );

    //Facebook Strategy
    passport.use(
        'facebook',
        new FacebookStrategy({
            clientID: CONFIG.oauth.facebook.clientID,
            clientSecret: CONFIG.oauth.facebook.clientSecret
        }, async (accessToken, refreshToken, profile, done) => {
            try {
                let user;
                if (profile && profile.emails[0] && profile.emails[0].value) {
                    user = await User.findOne({email: profile.emails[0].value});
                } else {
                    // In case if fb profile doesn't contain email
                    user = await User.findOne({authId: profile.id});
                }
                if (user) {
                    return done(null, {user});
                }

                done(null, {profile});
            } catch (error) {
                done(error, false, error.message);
            }
        })
    );
};
