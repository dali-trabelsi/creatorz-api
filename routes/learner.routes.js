const router = require("express").Router();
const { authJwt } = require("../middlewares");
const controller = require("../controllers/learner.controller");

router.get("/info", [authJwt.verifyLearnerToken], controller.getProfileInfo);

router.get("/all", [authJwt.verifyAdminToken], controller.getAll);

module.exports = router;
