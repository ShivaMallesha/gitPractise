const fastify = require('fastify')()

fastify.register(require('@fastify/mysql'), {
  connectionString: 'mysql://vkvsql@localhost/mysql'
})

fastify.get('/user/:id', function(req, reply) {
  fastify.mysql.query(
    'create database Schools',
    function onResult (err, result) {
      reply.send(err || result)
    }
  )
})

fastify.listen({ port: 3000 }, err => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})
