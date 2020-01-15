const sendPage = require('./src/methods/query/sendPage')
const afterChoose = require('./src/methods/query/afterChoose')
const orders = require('./src/methods/orders/orders')
const sendOrders = require('./src/methods/orders/sendOrders')
const sendAllPages = require('./src/methods/orders/sendAllPages')
const sendAuthor = require('./src/methods/orders/sendAuthor')
const sendBook = require('./src/methods/orders/sendBook')
const sendHelp = require('./src/methods/orders/sendHelp')
const sendTribute = require('./src/methods/general/sendTribute')

module.exports = async function App(context) {
    const payload = context.event.payload
    const text = context.event.text

    if (/afterChoose/.test(payload)) {
        return afterChoose(context, payload.slice(-1))
    }
    if (/sendAllPages/.test(payload)) {
        return sendAllPages(context, payload.split('_')[1], payload.split('_')[2])
    }

    if (/rex/.test(text)) {
        sendTribute(context)
    }

    switch (text) {
        case orders.list:
            return sendAllPages(context, 1)
        case orders.book:
            return sendBook
        case orders.orders:
            return sendOrders
        case orders.help:
            return sendHelp
        case orders.author:
            return sendAuthor
        default:
            return sendPage
    }
};