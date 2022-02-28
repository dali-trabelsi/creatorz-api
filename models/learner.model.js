const { Schema, model } = require("mongoose");

const learnerSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = Learner = model("Learner", learnerSchema);
