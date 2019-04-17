const db = require('./model');

module.exports = {
  async findAllWraps(req, res) {
    try {
      const wraps = await db.Wrap.find({});
      res.json(wraps);
    }
    catch (err) {
      res.json(err);
    }
  },

  async addWrap(req, res) {
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
    }
    catch (err) {
      res.json(err);
    }
  },

  async deleteWrap(req, res) {
    try {
      const wrapToDelete = await db.Wrap.deleteOne({ _id: req.body._id });
      res.json(wrapToDelete);
    } catch (err) {
      res.json(err);
    }
  },

  async updateWrap(req, res) {
    try {
      const wrapToUpdate = await db.Wrap.findOneAndUpdate({ _id: req.body._id}, {$set: {isAvailable: req.body.isAvailable}});
      res.json(wrapToUpdate);
    } catch (err) {
      res.json(err);
    }
  }
}
