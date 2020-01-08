const cookbook = require('../cookbook')
const normalMsg = require('../language/normalMsg')
const loading = require('./loading')

async function sendPage(context) {
    loading(context)
    const page = await cookbook.getPage(context.event.text)
    if (Object.keys(page).length === 0) {
        return foundNothing
    }
    await context.sendText(page[0].title);
}

function foundNothing(context) {
    context.sendText(normalMsg.en.foundNothing);
}

module.exports = sendPage