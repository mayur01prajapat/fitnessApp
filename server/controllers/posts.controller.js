const { to, ReE, ReS } = require("../services/util.service");
const { Space, Subscription, Notification, Post, User } = require("../models");
const ObjectId = require("mongodb").ObjectId;
var formidable = require("formidable");
var fs = require("fs");

const createPost = async function (req, res) {
  const user = req.user;
  let err, posts;
  var form = new formidable.IncomingForm({ uploadDir: __dirname + '/../public/uploads' });
  form.parse(req, async function (err, fields, files) {
    var oldpath = files.filetoupload.path;
    console.log("fields : ", fields);
    const  filename =new Date().getTime() + files.filetoupload.name; 
    var newpath =
      __dirname +"/../public/uploads/"+filename;
    fs.rename(oldpath, newpath, function (err) {
      if (err) throw err;
    });
    form.on("fileBegin", function (name, file) {
      file.path = __dirname + "/../public/uploads/" + file.name;
    });
    [err, posts] = await to(
      Post.create({
        user,
        // exercise: fields.exercise,
        description: fields.exercise,
        picture: "/uploads/"+filename,
      })
    );
    console.log('err',err)
    console.log(posts)
    if (posts)
    return ReS(res, { message: "Successfully created post.", posts }, 201);
  });
  if (err) return ReE(res, "DatabaseError");
  if (posts)
    return ReS(res, { message: "Successfully created post.", posts }, 201);
};

module.exports = {
  createPost,
};
