const Server = require('./server/server')
const config = require('./config/constant')

let server = new Server({config: config})

server.start()
