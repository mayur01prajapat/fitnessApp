const express = require("express");
const path = require("path");

const postController = require("./controllers/posts");
const exerciseController = require("./controllers/exercises");
const exerciseLogsController = require("./controllers/exerciseLogs");
const dietLogsController = require("./controllers/dietLogs");
const usersController = require("./controllers/users");

const app = express();
const port = 3000;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(express.static(__dirname + "/../client/dist"))
  .get("/", (req, res) => res.send("This class is awesome!"))
  .use("/posts", postController)
  .use("/exercises", exerciseController)
  .use("/exerciseLogs", exerciseLogsController)
  .use("/dietLogs", dietLogsController)
  .use("/users", usersController)
  .use(express.static("public"))
  .use((err, req, res, next) => {
    console.error(err);
    const errorCode = err.code || 500;
    res.status(errorCode).send({ message: err.message });
  });

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
