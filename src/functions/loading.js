const randomItem = require('random-item');
const normalMsg = require('../language/normalMsg')
const sendErrorMsg = require('./sendErrorMsg')

function loading(context) {
    try {
        context.sendText(randomItem(normalMsg.en.loading))
    } catch (e) {
        sendErrorMsg(e, context)
    }
}

module.exports = loading