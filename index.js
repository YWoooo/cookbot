const sendPage = require('./src/functions/sendPage')
const sendAllPages = require('./src/functions/sendAllPages')
const emptyQuery = require('./src/functions/emptyQuery')

module.exports = async function App(context) {
    if(context.event.text === '-all'){
        return sendAllPages
    }
    return context.event.text.trim().length === 0 ? emptyQuery : sendPage
};