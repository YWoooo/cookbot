const sendPage = require('./src/functions/sendPage')
const emptyQuery = require('./src/functions/emptyQuery')

module.exports = async function App(context) {
    return context.event.text.trim().length === 0 ? emptyQuery : sendPage
};