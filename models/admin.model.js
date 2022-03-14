const { Schema, model } = require("mongoose");

const adminSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  joinedOn: { type: Date, default: new Date() },
});

module.exports = Admin = model("Admin", adminSchema);
