const loggerMiddleware = (req, _res, next) => {
  console.log('Request logged:', req.method, req.path)
  next()
}

module.exports = loggerMiddleware
