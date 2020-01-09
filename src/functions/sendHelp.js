const normalMsg = require('../language/normalMsg')
const sendErrorMsg = require('./sendErrorMsg')

async function sendHelp(context) {
    try {
        await context.sendText(normalMsg.en.help[0])
        await context.sendText(normalMsg.en.help[1])
        await context.sendText(normalMsg.en.help[2])
    } catch (e) {
        sendErrorMsg(context)
    }
}

module.exports = sendHelp