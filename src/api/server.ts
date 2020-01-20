import Express from 'express'
import Morgan from 'morgan'
import BodyParser from 'body-parser'
import Mongoose from 'mongoose'

import logger from '../config/logger'
import rootRouter from './router'

const app = Express()

app.use(Morgan('dev'))
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: false }))

app.use(rootRouter)

// Not found handle
app.use((req, res) => {
    res.status(404).json({
        status: 'error',
        message: 'Not found',
    })
})

Mongoose.connect(
    'mongodb://localhost:27017/typegoose',
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) return logger.server('Connect fail')
        return logger.server('Connected to MongoDB')
    }
)

export default app