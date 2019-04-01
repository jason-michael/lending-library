const db = require('../models');

module.exports = {
  async findAll(req, res) {
    try {
      const allWraps = await db.Wrap.find({});
      res.json(allWraps);
    } catch (err) {
      res.json(err);
    }
  },
  async addNewWrap(req, res) {
    try {
      const newWrap = await db.Wrap.create({
        lenderName: req.body.lenderName,
        lenderNumber: req.body.lenderNumber,
        isAvailable: req.body.isAvailable || true
      });
      res.json(newWrap);
    } catch (err) {
      res.json(err);
    }
  }
}
