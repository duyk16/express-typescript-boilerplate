import Express from 'express'
import Morgan from 'morgan'
import BodyParser from 'body-parser'

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
});

export default app