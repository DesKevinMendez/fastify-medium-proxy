const axios = require('axios');
const { parseString } = require('xml2js');

module.exports.getPosts = async (request, reply) => {
  const URL = 'https://medium.com/feed/';
  try {
    const post = await axios.get(`${URL}/@deskevinmendez`);
    parseString(post.data, (err, res2) => {
      if (err) {
        return reply
          .send({
            err: 'We could not convert XML to JSON'
          })
          .status(500);
      }
      return reply.send({
        posts: res2.rss.channel[0].item
      });
    });
  } catch (err) {
    return reply
      .send({
        err
      })
      .code(500);
  }
};
