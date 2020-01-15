const formatPage = require('./formatPage')
const sendMoreDetail = require('./sendMoreDetail')
const sendErrorMsg = require('../general/sendErrorMsg')

async function afterChoose(context, i) {
    try {
        await context.sendText(formatPage(global.pages[i]))
        sendMoreDetail(context, global.pages[i])
    } catch (e) {
        return sendErrorMsg(e, context)
    }
}

module.exports = afterChoose