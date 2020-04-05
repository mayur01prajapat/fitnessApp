const mongoose = require('mongoose');

const MemorySchema = mongoose.Schema({
    video: String,
    description: String,
    thumbnail: String,
    upload_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    subscribers: [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        subscribed: Boolean
    }],
    isLocked: Boolean
}, { timestamps: true });

module.exports = mongoose.model('Memory', MemorySchema);
