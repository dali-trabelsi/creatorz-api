const router = require("express").Router();
const { authJwt } = require("../middlewares");
const controller = require("../controllers/learner.controller");

router.get(
  "/user/info",
  [authJwt.verifyLearnerToken],
  controller.getProfileInfo
);

router.put(
  "/user/info",
  [authJwt.verifyLearnerToken],
  controller.updateProfileInfo
);

router.get("/all", [authJwt.verifyAdminToken], controller.getAll);

module.exports = router;
