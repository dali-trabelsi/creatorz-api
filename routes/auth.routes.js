const router = require("express").Router();
const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");
const { verifySuperAdminToken } = require("../middlewares/authJwt");

router.post(
  "/learner/signup",
  [verifySignUp.checkDuplicateLearnerEmail],
  controller.learnerSignup
);

router.post("/learner/signin", controller.leanerSignin);

router.post(
  "/teacher/signup",
  [verifySignUp.checkDuplicateTeacherEmail],
  controller.teacherSignup
);

router.post("/teacher/signin", controller.teacherSignin);

router.post(
  "/admin/create",
  [verifySuperAdminToken, verifySignUp.checkDuplicateAdminEmail],
  controller.adminCreate
);

router.post("/admin/signin", controller.adminSignin);

module.exports = router;
