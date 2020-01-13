const normalMsg = require('../language/normalMsg')

function sendChoose(context) {
    const quick_replies = []
    global.pages.forEach((e, i) => {
        quick_replies.push({
            content_type: 'text',
            title: e.title,
            payload: i,
        })
    });
    try {
        context.sendText(normalMsg.en.choose, { quick_replies: quick_replies });
    } catch (e) {
        console.log(e)
        return sendErrorMsg(context)
    }
}

module.exports = sendChoose