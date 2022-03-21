const router = require("express").Router();
const { authJwt } = require("../middlewares");
const controller = require("../controllers/admin.controller");

router.get("/info", [authJwt.verifyAdminToken], controller.getProfileInfo);

router.get(
  "/super",
  [authJwt.verifySuperAdminToken],
  controller.getProfileInfo
);

router.put(
  "/approve/:user/:_id",
  [authJwt.verifyAdminToken],
  controller.approveUser
);

module.exports = router;
