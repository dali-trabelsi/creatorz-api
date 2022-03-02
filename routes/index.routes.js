const router = require("express").Router();
require("../utils/swagger/config");
const authRoutes = require("./auth.routes");
const learnerRoutes = require("./learner.routes");
const teacherRoutes = require("./teacher.routes");
const adminRoutes = require("./admin.routes");

router.use("/auth", authRoutes);
router.use("/learner", learnerRoutes);
router.use("/teacher", teacherRoutes);
router.use("/admin", adminRoutes);

router.get("/", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
