const ordersMsg = require('../language/orders')
const sendErrorMsg = require('./sendErrorMsg')

function sendOrders(context) {
    const orderList = []
    Object.keys(orders).map(e => orderList.push(`· ${orders[e]}: ${ordersMsg.en[e]} \n`))
    try {
        context.sendText(`\n${ordersMsg.en.sendOrders} \n${orderList.join('')}`);
    } catch (e) {
        sendErrorMsg(context)
    }
}

const orders = {
    list: '--list',
    orders: '--orders',
    help: '--help'
}

module.exports = { sendOrders, orders }