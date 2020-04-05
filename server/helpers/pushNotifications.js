const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://everpresent-ed452.firebaseio.com"
});

module.exports = function sendPushNotification(tokens, data) {
    if (!tokens || tokens.length === 0) return;
    tokens.forEach((token) => {
        console.log('inside push notifications : ', token)
        let tokn = token.token;
        if(tokn){
            admin.messaging().send({ token: tokn, ...data })
                .then((res) => {
                    console.log('Successfully sent push notification:', res);
                })
                .catch((err) => {
                    console.log('Error sending push notification:', err);
                });
        }
    })
};
