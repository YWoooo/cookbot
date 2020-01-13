const formatPage = require('./formatPage')

function afterChoose(context, i) {
    context.sendText(formatPage(global.pages[i]))
}

module.exports = afterChoose