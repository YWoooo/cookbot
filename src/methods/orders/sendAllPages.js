const cookbook = require('../../db/cookbook')
const loading = require('../general/sendLoading')
const normalMsg = require('../../language/normalMsg')
const sendErrorMsg = require('../general/sendErrorMsg')

async function sendAllPages(context, pageNumber, countFromPayload) {
    let pageSize = 10
    let count
    let res = ''

    try {
        // Send pages.
        loading(context)
        const pages = await cookbook.getAllPages(pageNumber, pageSize)
        pages.forEach(e => {
            res += `· ${e.title}\n`
        })
        await context.sendText(res)

        // Only count the number of documents once.
        if (pageNumber === 1) {
            const res = await cookbook.getCount()
            count = res.data
        } else {
            count = countFromPayload
        }

        // Send buttons.
        const btns = [
            {
                type: 'postback',
                title: `See another ${pageSize} pages`,
                payload: `sendAllPages_${pageNumber + 1}_${count}`
            },
            {
                type: 'web_url',
                url: 'https://ywchangsmail.gitbook.io/cookbook/',
                title: normalMsg.en.toBook,
            },
        ]

        // If all pages are shown, the see another pages button is unnecessary.
        if (pages.length < pageSize) {
            btns.shift()
        }
        await context.sendButtonTemplate(`These are the ${(pageNumber - 1) * pageSize + pages.length}/${count} of the cookbook. You can... `, btns)
    } catch (e) {
        sendErrorMsg(e, context)
    }
}

module.exports = sendAllPages