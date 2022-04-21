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
  avatar: String,
  address: {
    type: {
      country: { type: String, required: true },
      city: { type: String, required: true },
      street: { type: String },
      postcode: { type: Number },
    },
    required: true,
  },
  courseSubs: { type: [ObjectId], ref: "CourseSubscriptions" },
  rankings: { type: [ObjectId], ref: "LearnerRankings" },
  hadAdminApproval: { type: Boolean, default: false },
});

module.exports = Learner = model("Learner", learnerSchema);
