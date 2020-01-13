const normalMsg = require('../language/normalMsg')

function sendMoreDetail(context, page) {
    context.sendButtonTemplate(`${normalMsg.en.moreDetail}`, [
        {
            type: 'web_url',
            url: page.url,
            title: normalMsg.en.toBook,
        },
        {
            type: 'web_url',
            url: page.author.messenger,
            title: normalMsg.en.toAuthor,
        },
    ])
}

module.exports = sendMoreDetail