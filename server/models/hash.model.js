const mongoose = require('mongoose');

const HashSchema = mongoose.Schema({
    value: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    space: {type: mongoose.Schema.Types.ObjectId, ref: 'Space'},
    roleName: String,
    permission: String
}, {timestamps: true});

module.exports = mongoose.model('Hash', HashSchema);