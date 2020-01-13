const orders = require('./src/functions/orders').orders
const sendPage = require('./src/functions/sendPage')
const afterChoose = require('./src/functions/afterChoose')
const sendAllPages = require('./src/functions/sendAllPages')
const emptyQuery = require('./src/functions/emptyQuery')
const sendOrders = require('./src/functions/orders').sendOrders
const sendHelp = require('./src/functions/sendHelp')

module.exports = async function App(context) {
    const payload = context.event.payload
    if (payload) {
        return afterChoose(context, payload)
    }
    const text = context.event.text
    switch (text) {
        case orders.list:
            return sendAllPages
        case orders.orders:
            return sendOrders
        case orders.help:
            return sendHelp
        default:
            return text.trim().length === 0 ? emptyQuery : sendPage
    }
};