const axios = require('axios');

const CHECKER_WHEEL_URL = 'http://checkerwheel:5555/';
const CHECKER_WHEEL_ACCESS_TOKEN = '123123123221221321';

async function getBalance() {
    const headers = { "Accept": "application/json","Content-Type": "application/json" };
    const body = {
        token: CHECKER_WHEEL_ACCESS_TOKEN,
    };
    return await axios.post(CHECKER_WHEEL_URL + 'checkerwheel/balance', body, headers).then(res => res.data.balance).catch(err => console.error(err));
}

async function getLastTransactions(afterId=0, limits=10) {
    const headers = { "Accept": "application/json","Content-Type": "application/json" };
    const body = {
        token: CHECKER_WHEEL_ACCESS_TOKEN,
        limit: limits,
        transactionID: afterId
    };
    return await axios.post(CHECKER_WHEEL_URL + 'checkerwheel/last-transaction', body, headers).then(res => res.data).catch(err => console.error(err));
}

async function sendSteepCoin(recipientID, number) {
    const headers = { "Accept": "application/json","Content-Type": "application/json" };
    const body = {
        token: CHECKER_WHEEL_ACCESS_TOKEN,
        recipient: recipientID,
        sum: number
    };
    return await axios.post(CHECKER_WHEEL_URL + 'send_checkercoin', body, headers).then(res => res.data).catch(err => console.error(err));
}
