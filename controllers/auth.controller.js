const Learner = require("../models/learner.model");
const Teacher = require("../models/teacher.model");
const Admin = require("../models/admin.model");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.learnerSignup = (req, res) => {
  const learner = new Learner({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    fname: req.body.fname,
    lname: req.body.lname,
    dob: req.body.dob,
    phone: req.body.phone,
    address: req.body.address,
  });

  learner.save((err, learner) => {
    if (err) {
      res.status(500).send({ message: err.message || err });
      return;
    }

    res.send({ message: "Learner was registered successfully!" });
  });
};

exports.leanerSignin = (req, res) => {
  Learner.findOne({
    email: req.body.email,
  })
    .lean()
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
        { _id: learner._id },
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

exports.adminCreate = (req, res) => {
  const admin = new Admin({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  admin.save((err, admin) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: err.message || err });
      return;
    }

    res.send({ message: "Admin was added successfully!" });
  });
};

exports.adminSignin = (req, res) => {
  if (
    req.body.email === process.env.SUPER_ADMIN_LOGIN &&
    req.body.password === process.env.SUPER_ADMIN_PASSW
  ) {
    return Admin.findOne({ email: req.body.email })
      .lean()
      .exec((err, admin) => {
        if (!admin) {
          return res.status(404).send({ message: "Admin Not found In DB." });
        }
        const adminToken = jwt.sign(
          { _id: admin._id },
          process.env.ADMIN_ACCESS_TOKEN_SECRET,
          {
            expiresIn: 86400, // 24 hours
          }
        );
        const superToken = jwt.sign(
          { _id: admin._id },
          process.env.SUPER_ADMIN_ACCESS_TOKEN_SECRET,
          {
            expiresIn: 86400, // 24 hours
          }
        );
        return res.status(200).send({
          accessToken: adminToken,
          superAccessToken: superToken,
        });
      });
  }
  Admin.findOne({
    email: req.body.email,
  })
    .lean()
    .then((admin) => {
      if (!admin) {
        return res.status(404).send({ message: "Admin Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        admin.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }

      var token = jwt.sign(
        { _id: admin._id },
        process.env.ADMIN_ACCESS_TOKEN_SECRET,
        {
          expiresIn: 86400, // 24 hours
        }
      );

      res.status(200).send({
        id: admin._id,
        email: admin.email,
        accessToken: token,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: err.message || err });
    });
};

exports.teacherSignup = (req, res) => {
  const teacher = new Teacher({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    fname: req.body.fname,
    lname: req.body.lname,
    dob: req.body.dob,
    phone: req.body.phone,
    address: req.body.address,
  });

  teacher.save((err, teacher) => {
    if (err) {
      res.status(500).send({ message: err.message || err });
      return;
    }

    res.send({ message: "Teacher was registered successfully!" });
  });
};

exports.teacherSignin = (req, res) => {
  Teacher.findOne({
    email: req.body.email,
  })
    .lean()
    .then((teacher) => {
      if (!teacher) {
        return res.status(404).send({ message: "Teacher Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        teacher.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }

      var token = jwt.sign(
        { _id: teacher._id },
        process.env.TEACHER_ACCESS_TOKEN_SECRET,
        {
          expiresIn: 86400, // 24 hours
        }
      );

      res.status(200).send({
        _id: teacher._id,
        email: teacher.email,
        accessToken: token,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || err });
    });
};
