const randomItem = require('random-item');
const loadingMsg = require('../../language/loadingMsg')
const sendErrorMsg = require('../general/sendErrorMsg')

function loading(context) {
    try {
        context.sendText(randomItem(loadingMsg.en.loading))
    } catch (e) {
        sendErrorMsg(e, context)
    }
}

module.exports = loading