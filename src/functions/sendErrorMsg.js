const normalMsg = require('../language/normalMsg')

function sendErrorMsg(context) {
    context.sendText(normalMsg.en.errorMsg)
}

module.exports = sendErrorMsg