const normalMsg = require('../language/normalMsg')

function sendErrorMsg(context) {
    try {
        context.sendText(normalMsg.en.error)
    } catch (e) {
        console.log(e)
    }
}

module.exports = sendErrorMsg