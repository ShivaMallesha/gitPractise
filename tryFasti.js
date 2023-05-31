const fastify = require('fastify')({ logger: true })

//Add routes here, discussed in further steps

//@Server
fastify.listen(5000, (err) => {
  if (err) {
    console.log(err)
    process.exit(1)
  } else {
    console.log(`Server running, navigate to  https://localhost:5000`)
  }
})
