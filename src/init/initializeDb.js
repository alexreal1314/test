const { postgres } = require('../config');
const { Pool } = require('pg');
const { logger } = require('../utils');
let pool = null;

async function initializeDb() {
  try {
    pool = new Pool({
      ...postgres,
    });

    await pool.connect();
    const { host, port, database} = postgres;
    logger.info(`Successfully connected to PostgreSQL database '${database}' on host '${host}:${port}'`);
  } catch (e) {
    logger.error('Failed to connect to PostgreSQL database', e);
  }
}

module.exports = {
  initializeDb,
  getPool: () => pool,
};