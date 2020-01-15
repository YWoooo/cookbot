const sendErrorMsg = require('./sendErrorMsg')

async function sendAuthor(context) {
    try {
        await context.sendButtonTemplate("Sure, his name is 張育維\nywchangsmail@gmail.com", [{
            type: 'web_url',
            url: 'https://www.facebook.com/messages/t/100001127377528',
            title: 'Call 育維 now.',
        }])
        await context.sendText("He's really handsome, he has a cat, and he need a job. Could you give him a offer plz?")
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