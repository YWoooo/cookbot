const normalMsg = require('../language/normalMsg')

function sendErrorMsg(context) {
    context.sendText(normalMsg.en.error)
}

module.exports = sendErrorMsg