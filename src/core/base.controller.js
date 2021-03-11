const express = require('express')

class BaseController {
  constructor () {
    this.router = express.Router()
    this.path = '/'
    this.initRoutes()
  }
}

module.exports = BaseController
