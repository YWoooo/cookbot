const cookbook = require('../cookbook')
const normalMsg = require('../language/normalMsg')

async function sendAllPages(context) {
    const pages = await cookbook.getPage('')
    const titles = []
    pages.map(e => titles.push(`· ${e.title} \n`))
    await context.sendText(`${normalMsg.en.allPages} \n${titles.join('')}`);
}

module.exports = sendAllPages