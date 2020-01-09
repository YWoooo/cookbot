const cookbook = require('../cookbook')
const normalMsg = require('../language/normalMsg')
const loading = require('./loading')
const sendErrorMsg = require('./sendErrorMsg')

async function sendAllPages(context) {
    try {
        loading(context)
        const pages = await cookbook.getPage('')
        const titles = []
        pages.map(e => titles.push(`· ${e.title} \n`))
        context.sendText(`\n${normalMsg.en.allPages} \n${titles.join('')}`);
    } catch (e) {
        sendErrorMsg(context)
    }
}

module.exports = sendAllPages