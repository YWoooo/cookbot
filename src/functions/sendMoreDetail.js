const normalMsg = require('../language/normalMsg')

function sendMoreDetail(context, page) {
    context.sendButtonTemplate(`${normalMsg.en.moreDetail}`, [
        {
            type: 'web_url',
            url: page.url,
            title: 'Check out the book.',
        },
        {
            type: 'postback',
            title: 'Call the author.',
            payload: 'USER_DEFINED_PAYLOAD',
        },
    ])
}

module.exports = sendMoreDetail