function checkSubscription(subscription_date) {
    const sub_start_date = new Date(subscription_date);
    const sub_end_date = new Date(new Date(subscription_date).setMonth(sub_start_date.getMonth() + 1));
    const current_date = new Date();
    if (sub_start_date <= current_date && sub_end_date >= current_date) {
        return true;
    }else{
        return false;
    }
}

module.exports = checkSubscription;