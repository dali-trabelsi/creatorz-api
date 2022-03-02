const Teacher = require("../models/teacher.model");

exports.getProfileInfo = (req, res) => {
  res.send({ message: "Teacher access!" });
};
