const serverless = require('serverless-http');
const Fastify = require('fastify');

const fastify = Fastify({
  logger: true
});

const routers = (fastify, _, done) => {
  fastify.get('/', async (request, reply) => {
    reply.send({ text: 'Hello word' });
  });
  done();
};

fastify.register(routers);

module.exports.handler = serverless(fastify);
