const cookbook = require('../cookbook')
const normalMsg = require('../language/normalMsg')

async function sendPage(context) {
    const page = await cookbook.getPage(context.event.text)

    if (Object.keys(page).length === 0) {
        return foundNothing
    }

    await context.sendText(page[0].title);
    await context.sendText(`  · ${page[0].summary[0]}`)
}

function foundNothing(context) {
    context.sendText(normalMsg.en.foundNothing);
}

module.exports = sendPage