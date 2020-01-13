const formatPage = require('./formatPage')
const sendMoreDetail = require('./sendMoreDetail')

async function afterChoose(context, i) {
    await context.sendText(formatPage(global.pages[i]))
    sendMoreDetail(context, global.pages[i])
}

module.exports = afterChoose