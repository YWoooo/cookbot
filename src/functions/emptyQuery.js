const normalMsg = require('../language/normalMsg')
const sendErrorMsg = require('./sendErrorMsg')

function emptyQuery(context) {
    try {
        context.sendText(normalMsg.en.emptyQuery)
    } catch (e) {
        sendErrorMsg(e, context)
    }
}

module.exports = emptyQuery