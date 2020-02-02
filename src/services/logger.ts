import Debug from 'debug'

const server = Debug('dev:server')
const controller = Debug('dev:controller')
const model = Debug('dev:model')
const service = Debug('dev:service')

const logger = {
    server,
    controller,
    model,
    service,
}

export default logger