import 'dotenv/config'
import express from 'express'
import helmet from 'helmet'
import compression from 'compression'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'

import log from './utils/logger.utils.mjs'

const PORT = process.env.API_PORT || 8092
const DATABASE_CONNECTION_STRING = process.env.API_DB_CONN

const app = express()

// Helmet helps you secure your Express apps by setting various HTTP headers.
app.use(helmet())

// compress http responses
app.use(compression())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// parse cookies
app.use(cookieParser())

// connect to mongodb database
connectToDatabase().catch((err) => console.log(err))

// custom 404
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")
})

// custom error handler
app.use((err, req, res, next) => {
  log.error(err.stack)
  res.status(500).send('Something broke!')
})

const server = app.listen(PORT, () => {
  log.info(`HTTP Server started on ${PORT}`)
})

process.on('SIGTERM', () => {
  server.close(() => {})
})

async function connectToDatabase() {
  await mongoose.connect(DATABASE_CONNECTION_STRING)
}
