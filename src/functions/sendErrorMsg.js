const normalMsg = require('../language/normalMsg')

function sendErrorMsg(e, context) {
    try {
        console.log(e)
        context.sendText(normalMsg.en.error)
    } catch (e) {
        console.log(e)
    }
}

module.exports = sendErrorMsg