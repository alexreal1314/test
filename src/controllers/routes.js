const express = require('express');
const controller = require('./TestController');
const router = express.Router();
const CONTROLLER_PREFIX = 'test';

router.get(`/${CONTROLLER_PREFIX}`, (req, res) => {
  return controller.get(req, res);
});

module.exports = router;