const fastify = require('fastify')({ logger: true })
const { StandaloneSerializer } = require('@fastify/fast-json-stringify-compiler')

const factory = StandaloneSerializer({
  readMode: true,
  restoreFunction (routeOpts) {
    // routeOpts is like: { schema, method, url, httpStatus }
    const fileName = generateFileName(routeOpts)
    return require(path.join(__dirname, fileName))
  }
})

const app = fastify({
  jsonShorthand: false,
  schemaController: {
    compilersFactory: {
      buildSerializer: factory
    }
  }
})

// ... add all your routes with schemas as before...

app.listen({ port: 3000 })
