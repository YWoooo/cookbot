const ordersMsg = require('../language/orders')
const sendErrorMsg = require('./sendErrorMsg')

function sendOrders(context) {
    try {
        const orderList = []
        Object.keys(orders).map((e, index) => orderList.push(`${index + 1}. ${orders[e]} \n    ${ordersMsg.en[e]} \n\n`))
        context.sendText(`\n${ordersMsg.en.sendOrders} \n \n${orderList.join('')}`);
    } catch (e) {
        sendErrorMsg(e, context)
    }
}

const orders = {
    list: '-list',
    book: '-book',
    orders: '-orders',
    help: '-help',
    author: '-author'
}

module.exports = { sendOrders, orders }