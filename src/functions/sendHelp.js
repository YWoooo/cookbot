const normalMsg = require('../language/normalMsg')
const sendErrorMsg = require('./sendErrorMsg')

function sendHelp(context) {
    try {
        context.sendText(normalMsg.en.help)
    } catch (e) {
        sendErrorMsg(context)
    }
}

module.exports = sendHelp