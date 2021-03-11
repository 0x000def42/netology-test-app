const glob = require('glob')
const path = require('path')
const express = require('express')
const App = require('./app.js')

/* Helper method, that extracts default modules of each file in folder */
const autoload = folder =>
  glob.sync(`./src/${folder}/*.js`).map((file) => require(path.resolve(file)))

/* Declare middlewares and initialize controllers */
const middlewares = [express.json(), ...autoload('middlewares')]
const controllers = autoload('controllers').map(Controller => new Controller())

/* Initialize server */
const app = new App({
  port: 5000,
  controllers,
  middlewares
})

/* Start server */
app.listen()
