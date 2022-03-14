const router = require("express").Router();
const { authJwt } = require("../middlewares");
const controller = require("../controllers/teacher.controller");

router.get("/info", [authJwt.verifyTeacherToken], controller.getProfileInfo);

module.exports = router;
