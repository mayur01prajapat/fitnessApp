const mongoose = require("mongoose");
const { NOTIFICATION } = require("../constants");
const { READ, UNREAD } = NOTIFICATION;

const DietLogsSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    diet: { type: String },
    quantity :{
      count:Number,
      unit :String
    },
    calories: Number,
    diet_date: { type: Date, default: Date.now },
    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("DietLogs", DietLogsSchema);
