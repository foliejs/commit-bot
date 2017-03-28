const restify = require('restify')
const https = require('https')
const fs = require('fs')
const log = require('node-logger-center')
const Promise = require('bluebird')
const RouteHandler = require('../lib/RouteHandler')

class Server {
  constructor ({config: config}) {
    this.config = config
  }

  start () {
    this.startServer()
      .then(() => this._processGLOBAL())
      .then(() => this._processMiddleware())
      .then(() => this._processHandleHttpOptions())
      .then(() => this._processRoute())
      .then(() => this._processListen())
      .catch((err) => this._processSIGNT(err))
  }

  /**
   * [server instance]
   * @type {[type]}
   */
  startServer () {
    return new Promise((resolve, reject) => {
      // const ENV = process.env.NODE_ENV || 'dev'
      this.server = restify.createServer({
        name: this.config.SERVER.name
      })
      resolve(true)
    })
  }

  /**
   * global declare
   * [logger description]
   * @type {[type]}
   */
  _processGLOBAL () {
    global.logger = log
    global.service_host = this.host
  }

  /**
   * Middleware Init
   * @private.pem
   */
  _processMiddleware () {
    this.server.use(restify.queryParser())
    this.server.use(restify.bodyParser())
    this.server.use(restify.acceptParser(this.server.acceptable))
    this.server.use(require('morgan')('combined'))         // standout console log
    this.server.use(restify.CORS({
      origins: this.config.CORS_WHITE_LIST,                // defaults to ['*']
      credentials: true,                                   // defaults to false
      headers: ['x-foo']                                   // sets expose-headers
    }))
  }

  _processHandleHttpOptions () {
    this.server.on('MethodNotAllowed', (req, res) => {
      if (req.method.toUpperCase() === 'OPTIONS') {
        req.header('Access-Control-Allow-Credentials', true)
        req.header('Access-Control-Allow-Headers', restify.CORS.ALLOW_HEADERS.join(', '))
        req.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        req.header('Access-Control-Allow-Origin', req.headers.origin)
        req.header('Access-Control-Max-Age', 0)
        req.header('Content-type', 'text/plain charset=UTF-8')
        req.header('Content-length', 0)
        res.send(204)
      }
      else {
        res.send(new restify.MethodNotAllowedError())
      }
    })
  }

  /**
   * Build Route
   * @private.pem
   */
  _processRoute () {
    new RouteHandler({server: this.server}).handle()
  }

  /**
   * server monitor
   * @private.pem
   */
  _processListen () {
    this.server.listen(this.config.SERVER.port, () => logger.info(`${this.config.SERVER.name} listening on ${this.config.SERVER.port}`))
  }

  /**
   * handle exception
   * @private.pem
   */
  _processSIGNT (err) {
    this._loggerError(err)
    process.on('SIGTERM', () => this.close())
  }

  /**
   * report error
   * @param err_msg
   * @private
   */
  _loggerError (err_msg) {
    // TODO report to gray log
    console.error(err_msg)
  }

  close () {
    this.server.close()
  }
}

module.exports = Server