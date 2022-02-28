const router = require("express").Router();
const { authJwt } = require("../middlewares");
const controller = require("../controllers/learner.controller");

router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.get("/", [authJwt.verifyToken], controller.test);

module.exports = router;
