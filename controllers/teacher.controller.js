const courseModel = require("../models/course.model");
const { USER_ROLES } = require("../models/enums");
const Teacher = require("../models/teacher.model");

exports.getProfileInfo = (req, res) => {
  Teacher.findById(res.locals.decodedJWT._id)
    .lean()
    .then((result) => {
      res.status(200).json({ ...result, role: USER_ROLES.TEACHER });
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
};

exports.updateProfileInfo = (req, res) => {
  if (req.file) {
    req.body = { avatar: req.file.filename };
  }
  Teacher.findOneAndUpdate({ _id: res.locals.decodedJWT._id }, req.body)
    .then((result) => {
      console.log(result);
      res.status(200).json({ ...result, role: USER_ROLES.TEACHER });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: err.message });
    });
};

exports.getCourses = async (req, res) => {
  const courses = await courseModel.find({
    teacher: res.locals.decodedJWT._id,
  });
  res.json(courses);
};
