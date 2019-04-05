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
        brand: req.body.brand,
        name: req.body.name,
        size: req.body.size,
        type: req.body.type,
        image: req.body.image,
        borrowerName: req.body.borrowerName,
        borrowerNumber: req.body.borrowerNumber,
        borrowerEmail: req.body.borrowerEmail,
        isAvailable: req.body.isAvailable || true
      });
      res.json(newWrap);
    } catch (err) {
      res.json(err);
    }
  },
  async deleteWrap(req, res) {
    try {
      const wrapToRemove = await db.Wrap.findOneAndRemove({ _id: req.body.id });
      res.json(wrapToRemove);
    } catch (err) {
      res.json(err);
    }
  },
  // ! Remove
  async toggleAvailable(req, res) {
    try {
      const wrapToToggle = await db.Wrap.findOneAndUpdate({ _id: req.body.id}, {$set: {isAvailable: req.body.isAvailable}});
      res.json(wrapToToggle);
    } catch (err) {
      res.json(err);
    }
  }
}
