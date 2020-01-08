const randomItem = require('random-item');
const normalMsg = require('../language/normalMsg')

function loading(context) {
    context.sendText(randomItem(normalMsg.en.loading))
}

module.exports = loading