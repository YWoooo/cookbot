const cookbook = require('../cookbook')
const normalMsg = require('../language/normalMsg')
const loading = require('./loading')
const sendChoose = require('./sendChoose')
const formatPage = require('./formatPage')
const sendMoreDetail = require('./sendMoreDetail')
const sendErrorMsg = require('./sendErrorMsg')

async function sendPage(context) {
    try {
        loading(context)
        const page = await cookbook.getPage(context.event.text)
        if (Object.keys(page).length === 0) {
            return foundNothing
        }
        if (Object.keys(page).length > 1) {
            global.pages = page
            return sendChoose(context)
        }
        await context.sendText(formatPage(page[0]))
        sendMoreDetail(context, page[0])
    } catch (e) {
        return sendErrorMsg(e, context)
    }
}

function foundNothing(context) {
    context.sendText(normalMsg.en.foundNothing);
}

module.exports = sendPage