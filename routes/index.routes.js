const router = require("express").Router();
const authRoutes = require("./auth.routes");
const learnerRoutes = require("./learner.routes");

router.use("/auth", authRoutes);
router.use("/learner", learnerRoutes);

router.get("/", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
