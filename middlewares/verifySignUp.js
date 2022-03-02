const Learner = require("../models/learner.model");
const Teacher = require("../models/teacher.model");
const Admin = require("../models/admin.model");

checkDuplicateEmail = (req, res, next, USER) => {
  USER.findOne({
    email: req.body.email,
  })
    .lean()
    .exec((err, user) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
        return;
      }

      if (user) {
        res.status(409).send({ message: "Failed! Email is already in use!" });
        return;
      }

      next();
    });
};

checkDuplicateLearnerEmail = (req, res, next) => {
  checkDuplicateEmail(req, res, next, Learner);
};

checkDuplicateTeacherEmail = (req, res, next) => {
  checkDuplicateEmail(req, res, next, Teacher);
};

checkDuplicateAdminEmail = (req, res, next) => {
  checkDuplicateEmail(req, res, next, Admin);
};

const verifySignUp = {
  checkDuplicateLearnerEmail,
  checkDuplicateTeacherEmail,
  checkDuplicateAdminEmail,
};

module.exports = verifySignUp;
