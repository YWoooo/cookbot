const sendErrorMsg = require('../general/sendErrorMsg')

async function sendAuthor(context) {
    try {
        await context.sendButtonTemplate("Sure, his name is 育維\nAnd he nedd a job!", [{
            type: 'web_url',
            url: 'https://www.messenger.com/t/100001127377528',
            title: 'Send message to 育維.',
        }])
        await context.sendAttachment({
            type: 'image',
            payload: {
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKq0PkeZuwpjhKCrCD1-b7dfJ8dUeR5pejUOsN4_4PUJbthwGe&s'
            }
        });
    } catch (e) {
        sendErrorMsg(e, context)
    }
}

module.exports = sendAuthor