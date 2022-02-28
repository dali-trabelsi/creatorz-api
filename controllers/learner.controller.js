const Learner = require("../models/learner.model");

exports.test = (req, res) => {
  res.send({ message: "Learner access!" });
};
