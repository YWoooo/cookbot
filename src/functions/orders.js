const normalMsg = require('../language/normalMsg')
const ordersMsg = require('../language/orders')

function sendOrders(context) {
    const orderList = []
    Object.keys(orders).map(e => orderList.push(`· ${orders[e]}: ${ordersMsg.en[e]} \n`))
    context.sendText(`\n${normalMsg.en.sendOrders} \n${orderList.join('')}`);
}

const orders = {
    list: '--list',
    orders: '--orders'
}

module.exports = { sendOrders, orders }