const sendErrorMsg = require('../general/sendErrorMsg')

function sendBook(context) {
    try {
        context.sendButtonTemplate("Sure, here's the cookbook.", [{
            type: 'web_url',
            url: 'https://ywchangsmail.gitbook.io/cookbook/',
            title: 'Cookbook',
        }])
    } catch (e) {
        sendErrorMsg(e, context)
    }
}

module.exports = sendBook