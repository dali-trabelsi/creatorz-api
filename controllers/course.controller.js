const Course = require("../models/course.model");
const courseSectionModel = require("../models/courseSection.model");
require("../models/courseChapter.model");
require("../models/courseLesson.model");
require("../models/courseLessonElement.model");

exports.createCourse = async (req, res) => {
  try {
    const newCourse = new Course({
      ...req.body,
      thumbnail: req.file.filename,
      teacher: res.locals.decodedJWT._id,
    });
    const sections = await courseSectionModel.insertMany([
      {
        course: newCourse._id,
        title: "Comprendre",
        order: 1,
      },
      {
        course: newCourse._id,
        title: "Définir",
        order: 2,
      },
      {
        course: newCourse._id,
        title: "Diverger",
        order: 3,
      },
      {
        course: newCourse._id,
        title: "Décider",
        order: 4,
      },
      {
        course: newCourse._id,
        title: "Prototyper",
        order: 5,
      },
      {
        course: newCourse._id,
        title: "Tester",
        order: 6,
      },
    ]);

    newCourse.sections = sections;
    const course = await newCourse.save();
    console.log(course);
    res.json(course);
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

exports.getCourse = (req, res) => {
  console.log("getting course");
  Course.findById(req.params.course_id)
    .populate([
      { path: "teacher" },
      {
        path: "sections",
        populate: {
          path: "chapters",
          populate: {
            path: "lessons",
            populate: {
              path: "elements",
            },
          },
        },
      },
    ])
    .lean()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: err.message });
    });
};

exports.getCoursesByTeacher = (req, res) => {
  const teacher = req.params.user_id;
  Course.find({ teacher })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
};
