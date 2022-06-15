const {
  Schema,
  model,
  Types: { ObjectId },
} = require("mongoose");

const courseSectionSchema = new Schema(
  {
    course: { type: ObjectId, required: true, ref: "Course" },
    title: { type: String, required: true },
    thumbnail: { type: String, required: false },
    overview: { type: String, required: false },
    description: { type: String, required: false },
    order: { type: Number, required: true },
    chapters: [{ type: ObjectId, required: false, ref: "CourseChapter" }],
  },
  { timestamps: true }
);

module.exports = CourseSection = model("CourseSection", courseSectionSchema);
