const { getPosts } = require('./../controllers/posts');

module.exports.routers = (fastify, _, done) => {
  fastify.get('/', getPosts);
  done();
};
