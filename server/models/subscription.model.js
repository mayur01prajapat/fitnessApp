const mongoose = require('mongoose');
const { SUBSCRIPTION } = require('../constants');
const { REQUESTED, SUCCESS, FAILED } = SUBSCRIPTION;

const SubscriptionSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    space: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    memory: { type: mongoose.Schema.Types.ObjectId, ref: 'Memory' },
    subscription_date: { type: Date, default: Date.now },
    status: { type: String, enum: [REQUESTED, SUCCESS, FAILED] }
}, { timestamps: true });

module.exports = mongoose.model('Subscription', SubscriptionSchema);
