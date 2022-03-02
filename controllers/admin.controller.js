const Admin = require("../models/admin.model");

exports.getProfileInfo = (req, res) => {
  Admin.findById(res.locals._id)
    .lean()
    .exec((err, admin) => {
      if (err || !admin) {
        return res
          .status(404)
          .send({ message: "Can't find info in the DB.", err: err.message });
      }
      return res.status(200).json(admin);
    });
};
