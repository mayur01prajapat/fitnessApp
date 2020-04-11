const mongoose = require("mongoose");
const { NOTIFICATION } = require("../constants");
const { READ, UNREAD } = NOTIFICATION;

const PostsSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    exercise: { type: mongoose.Schema.Types.ObjectId, ref: "ExerciseLogs" },
    diet: { type: mongoose.Schema.Types.ObjectId, ref: "DietLogs" },
    post_date: { type: Date, default: Date.now },
    picture:String,
    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Posts", PostsSchema);
