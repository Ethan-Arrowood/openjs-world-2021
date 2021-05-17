import fastify from 'fastify'

export function createServer () {
  const server = fastify({ logger: true })

  server.get('/ping', (request, response) => {
    response.send('pong')
  })

  return server
}