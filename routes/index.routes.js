const router = require("express").Router();
require("../utils/swagger/config");
const { swaggerUi, swaggerDocs } = require("../utils/swagger/config");
const authRoutes = require("./auth.routes");
const learnerRoutes = require("./learner.routes");

router.use("/auth", authRoutes);
router.use("/learner", learnerRoutes);

// swagger docs
router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /api/v1/:
 *  get:
 *    description: Root API endpoint
 *    responses:
 *      '200':
 *        description: Server is running
 */
router.get("/", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
