const router = require('express').Router();

const UserController = require('../controllers/user.controller');
const SpaceController = require('../controllers/space.controller');
const NotificationController = require('../controllers/notification.controller');
const SubscriptionController = require('../controllers/subscription.controller');
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
router.post('/space/invite', passport.authenticate('jwt', { session: false }), SpaceController.invite);
router.post('/space/verifyInvitation', passport.authenticate('jwt', { session: false }), SpaceController.verifyInvitation);
router.post('/space/setRole', passport.authenticate('jwt', { session: false }), SpaceController.setRole);
router.get('/space/processInvitation/:hash/:verified', passport.authenticate('jwt', { session: false }), SpaceController.processInvitation);
router.get('/space/:id', passport.authenticate('jwt', { session: false }), SpaceController.get);
router.get('/invite/details/:hash', passport.authenticate('jwt', { session: false }), SpaceController.getInviteDetails);

router.get('/readers', passport.authenticate('jwt', { session: false }), SpaceController.getReaders);
router.get('/memories', passport.authenticate('jwt', { session: false }), SpaceController.getMemories);
router.get('/members', passport.authenticate('jwt', { session: false }), SpaceController.getMembers);
router.get('/story/:memberId', passport.authenticate('jwt', { session: false }), SpaceController.getMembersStory);

router.get('/story/count', passport.authenticate('jwt', { session: false }), SpaceController.getStoriesCount);
router.get('/memories/count', passport.authenticate('jwt', { session: false }), SpaceController.getMemoriesCount);
router.get('/subscriptions/active', passport.authenticate('jwt', { session: false }), SubscriptionController.getActiveSubscriptions);
router.get('/subscription/:id', passport.authenticate('jwt', { session: false }), SpaceController.getMemoriesCount);

router.get('/notification/:id', passport.authenticate('jwt', { session: false }), NotificationController.getNotifications);
router.post('/notification/read/:id', passport.authenticate('jwt', { session: false }), NotificationController.readNotification);
router.delete('/notification/delete/:id', passport.authenticate('jwt', { session: false }), NotificationController.deleteNotification);

router.post('/space/memory/save', passport.authenticate('jwt', { session: false }), SpaceController.saveMemory);
router.get('/memory/:spaceId/:memoryId', passport.authenticate('jwt', { session: false }), SpaceController.getMemory);
router.put('/memory/unlock/:spaceId/:memoryId', passport.authenticate('jwt', { session: false }), SpaceController.updateMemory);

module.exports = router;