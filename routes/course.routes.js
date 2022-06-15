const router = require("express").Router();
const controller = require("../controllers/course.controller");
const authJwt = require("../middlewares/authJwt");
const upload = require("../utils/multer");
const validate = require("../validations/course.validation");

router.post(
  "/create",
  authJwt.verifyTeacherToken,
  validate.createCourseValidation,
  upload.single("thumbnail"),
  controller.createCourse
);

router.get("/list/all", controller.getAll);

router.get("/list/teacher/:user_id", controller.getCoursesByTeacher);

router.get("/:course_id", controller.getCourse);

router.post(
  "/file-upload",
  authJwt.verifyTeacherToken,
  upload.single("file"),
  (req, res) => {
    console.log(req.file);
    res.status(200).json(req.file);
  }
);

module.exports = router;
