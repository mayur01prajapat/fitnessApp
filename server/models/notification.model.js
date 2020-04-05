const mongoose = require('mongoose');
const { NOTIFICATION } = require('../constants');
const { READ, UNREAD } = NOTIFICATION;

const NotificationSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    notification_date: { type: Date, default: Date.now },
    description: String,
    status: { type: String, enum: [READ, UNREAD] }
}, { timestamps: true });

module.exports = mongoose.model('Notification', NotificationSchema);
