const paypal = require('paypal-rest-sdk');
const { paypalSecrets } = require('../config/config');

paypal.configure({
    'mode': paypalSecrets.mode, //sandbox or live
    'client_id': paypalSecrets.client_id,
    'client_secret': paypalSecrets.client_secret
});


const definePayment = function (price, currency,success_url) {

    return {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": `http://localhost:3005/process/${success_url}`,
            "cancel_url": "http://localhost:3005/cancel"
        },
        "transactions": [{
            "amount": {
                "currency": currency || "USD",
                "total": price
            },
            "description": "This is the payment description."
        }]
    };

};

const createPayment = async function (payReq) {
    return new Promise((resolve, reject) => {
        paypal.payment.create(payReq, function (error, payment) {
            if (error) {
                console.error('Error in payment ', JSON.stringify(error));
                reject(error);
            } else {
                resolve(payment);
            }
        });
    });
};

const excecutePayment = async function (paymentId, PayerID) {
    return new Promise((resolve, reject) => {
        paypal.payment.execute(paymentId, PayerID, function (error, payment) {
            if (error) {
                console.error(JSON.stringify(error));
                reject(error);
            } else {
                let status;
                if (payment.state == 'approved') {
                    status = true;
                    console.log('payment completed successfully');
                } else {
                    status = false;
                    console.log('payment not successful');
                }
                resolve(status);
            }
        });
    });
}

module.exports = {
    definePayment,
    createPayment,
    excecutePayment
}