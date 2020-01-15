const normalMsg = require('../../language/normalMsg')

function sendChoose(context) {
    const quick_replies = []
    global.pages.forEach((e, i) => {
        quick_replies.push({
            content_type: 'text',
            title: e.title,
            payload: `afterChoose_${i}`,
        })
    });
    try {
        context.sendText(normalMsg.en.choose, { quick_replies: quick_replies });
    } catch (e) {
        return sendErrorMsg(e, context)
    }
}

module.exports = sendChoose