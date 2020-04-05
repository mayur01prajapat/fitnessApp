const {twilio} = require('../config/config');
const client = require('twilio')(twilio.sid, twilio.token);

module.exports = function sendMessage(to, body) {
    client.messages
        .create({
            body,
            from: twilio.number,
            to
        })
        .then((resp)=>console.log(resp)).catch((err)=>{
            console.log('err : ',err)
        });
};


