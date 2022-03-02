const Learner = require("../models/learner.model");

exports.getProfileInfo = (req, res) => {
  res.send({ message: "Learner access!" });
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
