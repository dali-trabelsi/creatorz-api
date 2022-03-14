const {
  Schema,
  model,
  Types: { ObjectId },
} = require("mongoose");

const courseSchema = new Schema(
  {
    title: { type: String, required: true },
    thumbnail: { type: String, required: true },
    overview: { type: String, required: true },
    description: { type: String, required: true },
    teacher: { type: ObjectId, required: true, ref: "Teacher" },
    sections: [{ type: ObjectId, required: true, ref: "CourseSection" }],
    isPublished: { type: Boolean, required: true },
    publishedOn: { type: Boolean },
  },
  { timestamps: true }
);

module.exports = Course = model("Course", courseSchema);
