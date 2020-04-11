const router = require('express').Router();

const UserController = require('../controllers/user.controller');
const SpaceController = require('../controllers/space.controller');
const ExcerciseController = require('../controllers/exercise.controller');
const PostsController = require('../controllers/posts.controller');
const NotificationController = require('../controllers/notification.controller');
const passport = require('passport');
require('./../middleware/passport')(passport);

// TODO: Check invitation process.
// TODO: Increase NGINX limit for videos.

router.get('/', function (req, res) {
  res.json({
    status: "success",
    message: "Parcel Pending API",
    data: { "version_number": "v1.0.0" }
  })
});

router.post('/user/login', UserController.login);
router.post('/user/register', UserController.create);
router.post('/user/logout', passport.authenticate('jwt', { session: false }), UserController.logout);
router.post('/user/oauth/facebook', passport.authenticate('facebook', { session: false }), UserController.OAuth);
router.post('/users/refresh/:token', UserController.refreshToken);
router.post('/user/setToken', passport.authenticate('jwt', { session: false }), UserController.setToken);
router.get('/user', passport.authenticate('jwt', { session: false }), UserController.get);
router.put('/user', passport.authenticate('jwt', { session: false }), UserController.update);

router.post('/space/create', passport.authenticate('jwt', { session: false }), SpaceController.create);
router.get('/exercises/all', passport.authenticate('jwt', { session: false }), ExcerciseController.getExercises);
router.post('/post/create', passport.authenticate('jwt', { session: false }), PostsController.createPost);
router.post('/notification/read/:id', passport.authenticate('jwt', { session: false }), NotificationController.readNotification);
router.delete('/notification/delete/:id', passport.authenticate('jwt', { session: false }), NotificationController.deleteNotification);
router.get('/memory/:spaceId/:memoryId', passport.authenticate('jwt', { session: false }), SpaceController.getMemory);

module.exports = router;