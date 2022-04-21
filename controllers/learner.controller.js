const { USER_ROLES } = require("../models/enums");
const Learner = require("../models/learner.model");

exports.getProfileInfo = (req, res) => {
  Learner.findById(res.locals.decodedJWT._id)
    .lean()
    .then((result) => {
      res.status(200).json({ ...result, role: USER_ROLES.LEARNER });
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
};

exports.getAll = (req, res) => {
  Learner.find({})
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
};

exports.updateProfileInfo = (req, res) => {
  Learner.findOneAndUpdate({ _id: res.locals.decodedJWT._id }, req.body)
    .lean.then((result) => {
      res.status(200).json({ ...result, role: USER_ROLES.LEARNER });
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
};
