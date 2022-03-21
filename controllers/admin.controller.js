const Admin = require("../models/admin.model");
const Learner = require("../models/learner.model");
const Teacher = require("../models/teacher.model");

exports.getProfileInfo = (req, res) => {
  Admin.findById(res.locals._id)
    .lean()
    .exec((err, admin) => {
      if (err || !admin) {
        return res
          .status(404)
          .send({ message: "Can't find info in the DB.", err: err.message });
      }
      return res.status(200).json(admin);
    });
};

exports.approveUser = (req, res) => {
  const user = req.params.user.toLowerCase();
  const _id = req.params._id;
  if (!["learner", "teacher"].includes(user))
    res.status(400).send({ message: "Bad request.", err: err.message });

  if (user === "learner") {
    Learner.findById(_id)
      .lean()
      .then(async (learner) => {
        if (!learner)
          return res
            .status(404)
            .send({ message: "Can't find user.", err: err.message });
        learner.hasAdminApproval = true;
        await learner.save();
        return res.sendStatus(200);
      })
      .catch((err) => {
        res.status(500).json({ message: err.message });
      });
  } else {
    Teacher.findById(_id)
      .lean()
      .then(async (teacher) => {
        if (!teacher)
          return res
            .status(404)
            .send({ message: "Can't find user.", err: err.message });
        teacher.hasAdminApproval = true;
        await teacher.save();
        return res.sendStatus(200);
      })
      .catch((err) => {
        res.status(500).json({ message: err.message });
      });
  }
};
