const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    const extension = file.originalname.slice(
      file.originalname.lastIndexOf(".")
    );
    cb(null, uuidv4() + extension);
  },
});
const upload = multer({ storage: storage });
module.exports = upload;
