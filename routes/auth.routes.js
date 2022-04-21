const router = require("express").Router();
const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");
const {
  verifySuperAdminToken,
  verifyToken,
} = require("../middlewares/authJwt");
const { USER_ROLES } = require("../models/enums");

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

router.post(
  "/verifyToken/:role",
  (req, res, next) => {
    const ROLE = req.params.role.toUpperCase();
    if (!Object.values(USER_ROLES).includes(ROLE)) {
      return res.status(400).json({ message: "invalid user role" });
    }
    verifyToken(req, res, next, ROLE);
  },
  controller.verifyToken
);

module.exports = router;
