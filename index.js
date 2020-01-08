const cookbook = require('./src/cookbook')
const normalMsg = require('./src/language/normalMsg')

async function sendPage(context) {
    const page = await cookbook.getPage(context.event.text)
    await context.sendText(page[0].title);
    await context.sendText(`  · ${page[0].summary[0]}`)
}

async function sendUnknown(context) {
    await context.sendText(normalMsg.en.foundNothing);
}

module.exports = async function App(context) {
    if (context.event.text.trim().length === 0) {
        return await context.sendText(normalMsg.en.emptyQuery)
    }
    //return context.event.text === 'custom' ? sendPage : sendUnknown;
    return sendPage
};