const helpMsg = require('../language/helpMsg')
const sendErrorMsg = require('./sendErrorMsg')

async function sendHelp(context) {
    try {
        await context.sendText(helpMsg.en.help[0])
        await context.sendText(helpMsg.en.help[1])
        await context.sendText(helpMsg.en.help[2])
    } catch (e) {
        sendErrorMsg(e, context)
    }
}

module.exports = sendHelp