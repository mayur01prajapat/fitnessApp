const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'everpresentnoreply@gmail.com',
        pass: 'everpresent0097'
    },
    tls: {
        rejectUnauthorized: false
    }
});

module.exports = {transporter};
