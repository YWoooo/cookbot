const pages = [{
    title: 'Prevent browser to auto complete a input',
    summary: [
        "Use autocomplete = 'off'",
        "If it's not working, use dummy input to taunt the browser.",
        "autocomplete = 'somerandomtext' may not work."
    ],
    url: 'https://app.gitbook.com/@ywchangsmail/s/cookbook/css/prevent-browser-to-auto-complete-a-input'
}, {
    title: 'Custom drop down arrow for <select>',
    summary: [
        "Use appearance: none makes original arrow disappear.",
        "Use background-image add a picture as new arrow.",
        "Use background-position: calc( 100% — imageWidth), 0 place new picture on the right."
    ],
    url: 'https://app.gitbook.com/@ywchangsmail/s/cookbook/css/change-drop-down-arrow-of-select-tag.'
}, {
    title: 'Placeholder for select',
    summary: [
        "Add a hidden <option> on the top.",
        "Add placeholder text inside."
    ],
    url: 'https://app.gitbook.com/@ywchangsmail/s/cookbook/css/placeholder-for-select'
}]

async function SendPage(context) {
    await context.sendText(pages[0].url);
}

async function SendUnknown(context) {
    await context.sendText("Sorry, but I found nothing in the cookbook.");
}

module.exports = async function App(context) {
    return context.event.text === 'page' ? SendPage : SendUnknown;
};