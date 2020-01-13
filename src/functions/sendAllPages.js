const cookbook = require('../cookbook')
const normalMsg = require('../language/normalMsg')
const sendErrorMsg = require('./sendErrorMsg')

async function sendAllPages(context) {
    try {
        await context.sendText(normalMsg.en.allPages)
        const pages = await cookbook.getPage('')
        pages.forEach(e => {
            context.sendText(`· ${e.title}`)
        });
    } catch (e) {
        sendErrorMsg(e, context)
    }
}

module.exports = sendAllPages