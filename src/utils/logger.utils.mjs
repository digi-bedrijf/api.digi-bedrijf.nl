import bunyan from 'bunyan'

const APP_NAME = process.env.API_NAME || 'API'

const log = bunyan.createLogger({name: APP_NAME})

export default log