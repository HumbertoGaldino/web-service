const corsMiddleware = require('restify-cors-middleware')
const { server } = require('.')

const cors = corsMiddleware({
  preflightMaxAge: 5,
  origins: ['*'],
  allowHeaders: ['*'],
  exposeHeaders: ['*']
})

module.exports = cors