const cookbook = require('../cookbook')
const normalMsg = require('../language/normalMsg')
const loading = require('./loading')

async function sendAllPages(context) {
    loading(context)
    const pages = await cookbook.getPage('')
    const titles = []
    pages.map(e => titles.push(`· ${e.title} \n`))
    await context.sendText(`${normalMsg.en.allPages} \n${titles.join('')}`);
}

module.exports = sendAllPages