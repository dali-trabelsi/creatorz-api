const router = require("express").Router();
const { authJwt } = require("../middlewares");
const controller = require("../controllers/teacher.controller");
const upload = require("../utils/multer");

router.get(
  "/user/info",
  [authJwt.verifyTeacherToken],
  controller.getProfileInfo
);

router.put(
  "/user/info",
  [authJwt.verifyTeacherToken],
  upload.single("avatar"),
  controller.updateProfileInfo
);

router.get("/my/courses", authJwt.verifyTeacherToken, controller.getCourses);

module.exports = router;
