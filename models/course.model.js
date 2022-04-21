const {
  Schema,
  model,
  Types: { ObjectId },
} = require("mongoose");

const courseSchema = new Schema(
  {
    title: { type: String, required: true },
    thumbnail: { type: String, required: true },
    overview: { type: String, required: false },
    description: { type: String, required: true },
    teacher: { type: ObjectId, required: true, ref: "Teacher" },
    sections: [{ type: ObjectId, ref: "CourseSection" }],
    isPublished: { type: Boolean, default: false },
    publishedOn: { type: Date },
  },
  { timestamps: true }
);

module.exports = Course = model("Course", courseSchema);
