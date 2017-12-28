'use strict'

const express = require('express')
const app = express.Router()

app.get('/', (req, res) =>{
  res.json({
    Cat: 'Meow'
  })
})

module.exports = app
