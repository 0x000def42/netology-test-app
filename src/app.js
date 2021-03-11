const express = require('express')

/* Wrapper on express */
class App {

  constructor({port, middlewares, controllers}){
    this.app = express()
    this.port = port

    this.middlewares(middlewares)
    this.controllers(controllers)
  }

  /* Wrap middlewares */
  middlewares(middleWares){
    middleWares.forEach(middleWare => {
      this.app.use(middleWare)
    })
  }

  /* Wrap controllers */
  controllers(controllers){
    controllers.forEach(controller => {
      this.app.use(controller.path, controller.router)
    })
  }

  listen(){
    this.app.listen(this.port, () => {
      console.log(`App listening on the http://localhost:${this.port}`)
    })
  }

}

module.exports = App