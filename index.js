const serverless = require('serverless-http');
const { routers } = require('./routes/post');
const Fastify = require('fastify');


const fastify = Fastify({
  logger: true
});
fastify.register(require('fastify-cors'), {})
fastify.register(routers);

module.exports.handler = serverless(fastify);
