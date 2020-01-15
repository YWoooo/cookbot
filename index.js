const sendPage = require('./src/functions/sendPage')
const emptyQuery = require('./src/functions/emptyQuery')
const afterChoose = require('./src/functions/afterChoose')
const orders = require('./src/functions/orders').orders
const sendAllPages = require('./src/functions/sendAllPages')
const sendBook = require('./src/functions/sendBook')
const sendOrders = require('./src/functions/orders').sendOrders
const sendHelp = require('./src/functions/sendHelp')
const sendAuthor = require('./src/functions/sendAuthor')

module.exports = async function App(context) {
    const payload = context.event.payload
    if (/afterChoose/.test(payload)) {
        return afterChoose(context, payload.slice(-1))
    }
    if (/sendAllPages/.test(payload)) {
        return sendAllPages(context, payload.split('_')[1], payload.split('_')[2])
    }

    const text = context.event.text
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
            return text.trim().length === 0 ? emptyQuery : sendPage
    }
};