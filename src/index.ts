import fastify from 'fastify'

const server = fastify({
    logger: true
  })

server.get('/', async (request, reply) => {
  server.log.info('Incoming request at /');
  return 'Hello there! 👋'
})

server.listen({ port: 3000, host: '0.0.0.0'}, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  server.log.info(`Started server at ${address}`)
})
