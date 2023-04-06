import bunyan from 'bunyan'

const APP_NAME = process.env.API_NAME || 'API'

export const log = bunyan.createLogger({name: APP_NAME})