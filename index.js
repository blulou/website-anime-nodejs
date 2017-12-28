'use strict'

const mongoose = require('mongoose')
const config = require('./config')
const app = require('./app')

mongoose.connect(config.db, (err, res) => {

  if (err) return console.log(`No se ha podido establecer la conexión a la base de datos: ${err}`)
  console.log('La conexión a la base de datos se ha realizado correctamente')

  app.listen(config.port, () => {
    console.log(`API REST corriendo en http://localhost:${config.port}`)
  })
})
