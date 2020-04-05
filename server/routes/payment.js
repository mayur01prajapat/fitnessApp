const router = require('express').Router();

const SubscriptionController = require('../controllers/subscription.controller');
const passport = require('passport');
require('../middleware/passport')(passport);

// TODO: Check invitation process.
// TODO: Increase NGINX limit for videos.

router.get('/', function (req, res) {
  res.json({
    status: "success",
    message: "Parcel Pending API",
    data: { "version_number": "v1.0.0" }
  })
});

router.get('/v1/subscribeAllVideos/:space', passport.authenticate('jwt', { session: false }), SubscriptionController.subscribePlan);
router.get('/v1/subscribeSingleVideo/:story', passport.authenticate('jwt', { session: false }), SubscriptionController.subscribeVideo);
router.get('/process/all/:subscription',  SubscriptionController.processPayment);
router.get('/process/single/:subscription',  SubscriptionController.processSingleStoryPayment);
module.exports = router;