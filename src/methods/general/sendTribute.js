const sendErrorMsg = require('../general/sendErrorMsg')

function sendTribute(context) {
    try {
        context.sendText("Rex? Yeah I agree with him! Front-end developers are worthless!")
    } catch (e) {
        sendErrorMsg(e, context)
    }
}

module.exports = sendTribute