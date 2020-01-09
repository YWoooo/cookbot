const normalMsg = require('../language/normalMsg')

function sendHelp(context) {
    context.sendText(normalMsg.en.help)
}

module.exports = sendHelp