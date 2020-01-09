const cookbook = require('../cookbook')
const normalMsg = require('../language/normalMsg')
const loading = require('./loading')
const sendErrorMsg = require('./sendErrorMsg')

async function sendPage(context) {
    try {
        loading(context)
        const page = await cookbook.getPage(context.event.text)
        if (Object.keys(page).length === 0) {
            return foundNothing
        }
        await context.sendText(page[0].title);
    } catch (e) {
        sendErrorMsg(context)
    }
}

function foundNothing(context) {
    context.sendText(normalMsg.en.foundNothing);
}

module.exports = sendPage