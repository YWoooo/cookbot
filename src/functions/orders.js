const ordersMsg = require('../language/orders')

function sendOrders(context) {
    const orderList = []
    Object.keys(orders).map(e => orderList.push(`${orders[e]} \n ${ordersMsg.en[e]} \n \n`))
    context.sendText(`\n${ordersMsg.en.sendOrders} \n \n${orderList.join('')}`);
}

const orders = {
    list: '-list',
    orders: '-orders',
    help: '-help'
}

module.exports = { sendOrders, orders }