const cookbook = require('../../cookbook')
const normalMsg = require('../../language/normalMsg')
const loading = require('../general/loading')
const sendChoose = require('./sendChoose')
const formatPage = require('./formatPage')
const sendMoreDetail = require('./sendMoreDetail')
const sendErrorMsg = require('../general/sendErrorMsg')

async function sendPage(context) {
    try {
        loading(context)
        const page = await cookbook.getPage(context.event.text)
        const quantity = Object.keys(page).length

        if (quantity === 0) {
            return foundNothing
        }

        if (quantity === 1) {
            await context.sendText(formatPage(page[0]))
            sendMoreDetail(context, page[0])
        }

        if (quantity > 1 && quantity < 4) {
            global.pages = page
            return sendChoose(context)
        }

        if (quantity > 3) {
            context.sendText(normalMsg.en.foundToMany)
        }
    } catch (e) {
        return sendErrorMsg(e, context)
    }
}

function foundNothing(context) {
    context.sendText(normalMsg.en.foundNothing);
}

module.exports = sendPage