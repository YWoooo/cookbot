const cookbook = require('../cookbook')
const normalMsg = require('../language/normalMsg')

async function sendAllPages(context) {
    context.sendText(normalMsg.en.allPages)
    const pages = await cookbook.getPage('')
    pages.forEach(e => {
        context.sendText(`· ${e.title}`)
    });
}

module.exports = sendAllPages