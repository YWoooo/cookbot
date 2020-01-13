require('dotenv').config({ path: './process.env' })

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
      path: '/',
      pageId: process.env.MESSENGER_PAGE_ID,
      accessToken: process.env.MESSENGER_ACCESS_TOKEN,
      verifyToken: process.env.MESSENGER_VERIFY_TOKEN,
      appId: process.env.MESSENGER_APP_ID,
      appSecret: process.env.MESSENGER_APP_SECRET,
      profile: {
        greeting: [
          {
            locale: 'default',
            text: "Hello, {{user_first_name}}, I'm your cookbot. Just give me any text and I'll find if there is a match in the cookbook!",
          }
        ],
      }
    },
  },
};