const sendPage = require('./src/functions/sendPage')
const sendAllPages = require('./src/functions/sendAllPages')
const emptyQuery = require('./src/functions/emptyQuery')
const sendErrorMsg = require('./src/functions/sendErrorMsg')

module.exports = async function App(context) {
    const text = context.event.text
    try {
        if (text === '-all') return sendAllPages
        return text.trim().length === 0 ? emptyQuery : sendPage
    } catch (e) {
        console.log(e)
        return sendErrorMsg
    }
};