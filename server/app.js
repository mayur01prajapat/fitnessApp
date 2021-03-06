const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const pe = require('parse-error');
const cors = require('cors');
const path = require('path');
const v1 = require('./routes/v1');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json')

const app = express();

const CONFIG = require('./config/config');
app.use(logger('dev'));
app.use(express.static('public'))
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
//Passport
app.use(passport.initialize());

//Log Env
console.log("Environment:", CONFIG.app);
//DATABASE
const models = require("./models");

// CORS
app.use(cors());

app.use(express.static('doc'));

app.use('/v1', v1);

app.use('/', (req, res) => {
  res.statusCode = 200;
  res.json({ status: "success", message: "Mongo API", data: {} })
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({ error: err.name || err.message || err, success: false });
});

module.exports = app;

process.on('unhandledRejection', error => {
  console.error('Uncaught Error', pe(error));
});
