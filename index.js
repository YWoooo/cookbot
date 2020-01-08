const orders = require('./src/functions/orders').orders
const sendPage = require('./src/functions/sendPage')
const sendAllPages = require('./src/functions/sendAllPages')
const emptyQuery = require('./src/functions/emptyQuery')
const sendErrorMsg = require('./src/functions/sendErrorMsg')
const sendOrders = require('./src/functions/orders').sendOrders

module.exports = async function App(context) {
    const text = context.event.text
    try {
        if (text === orders.list) return sendAllPages
        if (text === orders.orders) return sendOrders
        return text.trim().length === 0 ? emptyQuery : sendPage
    } catch (e) {
        console.log(e)
        return sendErrorMsg
    }
};