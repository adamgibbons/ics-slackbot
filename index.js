const SlackBot = require('slackbots')
const config = require('config.json')

const bot = new SlackBot({
  token: config.API_TOKEN,
  name: 'GibberBot'
})

const params = {}

bot.on('start', function() {
  bot.postMessageToChannel('general', 'mer!', params)
})

