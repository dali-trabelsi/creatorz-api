const router = require("express").Router();
require("../utils/swagger/config");
const authRoutes = require("./auth.routes");
const learnerRoutes = require("./learner.routes");
const teacherRoutes = require("./teacher.routes");
const adminRoutes = require("./admin.routes");
const courseRoutes = require("./course.routes");

router.use("/auth", authRoutes);
router.use("/learner", learnerRoutes);
router.use("/teacher", teacherRoutes);
router.use("/admin", adminRoutes);
router.use("/course", courseRoutes);

router.get("/", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
