require('dotenv').config();
const express = require('express');
const { initializeDb } = require('./init');
const routes = require('./routes');
const { logger } = require('./utils');

const server = express();
const { config, middleware } = require('./config');

(async () => {
  // init middleware
  middleware(server);

  // init db
  await initializeDb();

  // init routes
  routes(server);

  const { port } = config;
  server.listen(port, () => logger.info(`server started on port ${port}`));
})();