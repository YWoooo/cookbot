const orders = require('./orders')
const ordersMsg = require('../../language/orders')
const sendErrorMsg = require('../general/sendErrorMsg')

function sendOrders(context) {
    try {
        const orderList = []
        Object.keys(orders).map((e, index) => orderList.push(`${index + 1}. ${orders[e]} \n    ${ordersMsg.en[e]} \n\n`))
        context.sendText(`\n${ordersMsg.en.sendOrders} \n \n${orderList.join('')}`);
    } catch (e) {
        sendErrorMsg(e, context)
    }
}

module.exports = sendOrders