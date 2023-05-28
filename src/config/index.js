const { config } = require('./development');
const { postgres } = require('./postgres');
const { middleware } = require('./middleware');

module.exports = {
  config,
  postgres,
  middleware,
};