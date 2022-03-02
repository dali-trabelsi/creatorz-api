const { default: mongoose } = require("mongoose");
const { Schema, model } = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const learnerSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  dob: { type: Date, required: true },
  phone: { type: String, required: true },
  address: { type: ObjectId, required: true, ref: "Address" },
  courseSubs: { type: [ObjectId], ref: "CourseSubscriptions" },
  rankings: { type: [ObjectId], ref: "LearnerRankings" },
});

module.exports = Learner = model("Learner", learnerSchema);
