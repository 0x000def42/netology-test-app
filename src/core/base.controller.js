const express = require('express')

class BaseController {
  path = "/"
  router = express.Router()

  constructor(){
    this.initRoutes()
  }
}

module.exports = BaseController