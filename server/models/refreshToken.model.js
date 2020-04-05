const mongoose = require('mongoose');

const RefreshTokenSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    expiresIn: Number
}, {timestamps: true});

module.exports = mongoose.model('RefreshToken', RefreshTokenSchema);
