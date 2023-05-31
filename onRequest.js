const fastify = require('fastify')({ logger: true })
fastify.route({
  method: 'GET',
  url: '/Shiva',
  schema: {
    querystring: {
      name: { type: 'string' },
      excitement: { type: 'integer' }
    },
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'integer' }
        }
      }
    }
  },
  handler: function (request, reply) {
    reply.send({ hello: 940 })
  }
})
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
