const router = require("express").Router();
const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");

router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.post("/signup", [verifySignUp.checkDuplicateEmail], controller.signup);

router.post("/signin", controller.signin);

module.exports = router;
