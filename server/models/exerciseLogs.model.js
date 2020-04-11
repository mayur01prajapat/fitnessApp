const mongoose = require("mongoose");
const { NOTIFICATION } = require("../constants");
const { READ, UNREAD } = NOTIFICATION;

const ExerciseLogsSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    exercise: { type: String },
    sets: [
      {
        set: Number,
        reps: Number,
      },
    ],
    calories_burned: Number,
    notification_date: { type: Date, default: Date.now },
    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("ExerciseLogs", ExerciseLogsSchema);
