const Course = require("../models/course.model");

exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create({
      ...req.body,
      thumbnail: req.file.filename,
      teacher: res.locals.decodedJWT._id,
    });
    res.status(200).json({});
  } catch (error) {
    console.log(error);
    res.status(500).json({});
  }
};

exports.getAll = (req, res) => {
  Course.find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
};
