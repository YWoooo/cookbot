require('dotenv').config({ path: './process.env' })
const normalMsg = require('./src/language/normalMsg')

module.exports = {
  session: {
    driver: 'memory',
    stores: {
      memory: {
        maxSize: 500,
      },
    },
  },
  channels: {
    messenger: {
      enabled: true,
      path: '/webhooks/messenger',
      pageId: process.env.MESSENGER_PAGE_ID,
      accessToken: process.env.MESSENGER_ACCESS_TOKEN,
      verifyToken: process.env.MESSENGER_VERIFY_TOKEN,
      appId: process.env.MESSENGER_APP_ID,
      appSecret: process.env.MESSENGER_APP_SECRET,
      profile: {
        greeting: [
          {
            locale: 'default',
            text: normalMsg.en.welcome
          }
        ],
      }
    },
  },
};