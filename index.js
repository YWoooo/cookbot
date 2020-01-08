const cookbook = require('./src/cookbook')

async function sendPage(context) {
    const page = await cookbook.getPage(context.event.text)
    await context.sendText(page[0].title);
    await context.sendText(`  · ${page[0].summary[0]}`)
}

async function sendUnknown(context) {
    await context.sendText("Sorry, but I found nothing in the cookbook.");
}

module.exports = async function App(context) {
    if (context.event.text.trim().length === 0) {
        return await context.sendText('Sorry, but you have to type something so I can find in the cookbook.')
    }
    //return context.event.text === 'custom' ? sendPage : sendUnknown;
    return sendPage
};