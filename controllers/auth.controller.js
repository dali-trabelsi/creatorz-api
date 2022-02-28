const Learner = require("../models/learner.model");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  const learner = new Learner({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  learner.save((err, learner) => {
    if (err) {
      res.status(500).send({ message: err.message || err });
      return;
    }

    res.send({ message: "Learner was registered successfully!" });
  });
};

exports.signin = (req, res) => {
  Learner.findOne({
    email: req.body.email,
  })
    .then((learner) => {
      if (!learner) {
        return res.status(404).send({ message: "Learner Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        learner.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }

      var token = jwt.sign(
        { id: learner.id },
        process.env.LEARNER_ACCESS_TOKEN_SECRET,
        {
          expiresIn: 86400, // 24 hours
        }
      );

      res.status(200).send({
        id: learner._id,
        email: learner.email,
        accessToken: token,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || err });
    });
};
