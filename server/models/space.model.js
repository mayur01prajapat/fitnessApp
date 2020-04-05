const mongoose = require('mongoose');
const { ROLES } = require('../constants');
const { MOTHER, FATHER, SISTER, FRIEND } = ROLES;

const SpaceSchema = mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    moderators: [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        role: { type: String, enum: [MOTHER, FATHER, SISTER, FRIEND] },
        roleName: String,
        approved: { type: Boolean, default: false },
        verified: { type: Boolean, default: false }
    }],
    moderator: {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        role: { type: String, enum: [MOTHER, FATHER, SISTER, FRIEND] },
        roleName: String,
        approved: { type: Boolean, default: false },
        verified: { type: Boolean, default: false }
    },
    readers: [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        role: { type: String, enum: [MOTHER, FATHER, SISTER, FRIEND] },
        roleName: String,
        approved: { type: Boolean, default: false },
        verified: { type: Boolean, default: false }
    }],
    memories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Memory' }]
}, { timestamps: true });

SpaceSchema.methods.getAllTokens = async function (exceptUserTokens) {
    return new Promise((res, rej) => {
        this.populate('owner moderators.user readers.user', (err, space) => {
            err ? rej(err) : res(space);
        })
    })
        .then(space => {
            const tokens = new Set();
            space.owner.tokens.forEach(({ token }) => tokens.add(token));
            // if (space.moderator.user) {
            //     space.moderator.user.tokens.forEach(({token}) => tokens.add(token));
            // }
            // space.moderators.forEach(({ user }) => {
            //     if (user) {
            //         user.tokens.forEach(({ token }) => tokens.add(token))
            //     }
            // });
            space.readers.forEach(({ user }) => {
                if (user) {
                    user.tokens.forEach(({ token }) => tokens.add(token))
                }
            });
            // exceptUserTokens.forEach(obj => tokens.delete(obj.token));
            return [...tokens]
        })
        .catch(console.log);
};

module.exports = mongoose.model('Space', SpaceSchema);
