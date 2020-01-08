const normalMsg = require('../language/normalMsg')

function emptyQuery(context) {
    context.sendText(normalMsg.en.emptyQuery)
}

module.exports = emptyQuery