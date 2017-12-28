'use strict'

module.exports = {
  db: process.env.MONGODB || 'mongodb://localhost:27017/animedb',
  port: process.env.PORT || 3000
}
