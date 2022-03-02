const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next, ROLE) => {
  const bearer = req.headers["authorization"];
  const token = bearer && bearer.split(" ")[1];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(
    token,
    process.env[ROLE + "_ACCESS_TOKEN_SECRET"],
    (err, decodedJWT) => {
      console.log(decodedJWT);
      res.locals._id = decodedJWT._id;
      if (err) {
        return res.status(401).send({ message: "Unauthorized!" });
      }
      next();
    }
  );
};

const verifyLearnerToken = (req, res, next) => {
  verifyToken(req, res, next, "LEARNER");
};

const verifyTeacherToken = (req, res, next) => {
  verifyToken(req, res, next, "TEACHER");
};

const verifyAdminToken = (req, res, next) => {
  verifyToken(req, res, next, "ADMIN");
};

const verifySuperAdminToken = (req, res, next) => {
  verifyToken(req, res, next, "SUPER_ADMIN");
};

const authJwt = {
  verifyLearnerToken,
  verifyTeacherToken,
  verifyAdminToken,
  verifySuperAdminToken,
};

module.exports = authJwt;
