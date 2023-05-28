const { status } = require('../utils');
const { TestService } = require('../services');

module.exports = {
  get: async (req, res) => {
    try {
      return res.status(status.OK).send({});
    } catch (err) {
      return res.status(status.INTERNAL_ERROR).send(err);
    }
  },
};