const {
  Schema,
  model,
  Types: { ObjectId },
} = require("mongoose");

const courseSectionSchema = new Schema(
  {
    title: { type: String, required: true },
    thumbnail: { type: String, required: true },
    overview: { type: String, required: true },
    description: { type: String, required: true },
    order: { type: Number, required: true },
    chapters: [{ type: ObjectId, required: true, ref: "CourseChapter" }],
  },
  { timestamps: true }
);

module.exports = CourseSection = model("CourseSection", courseSectionSchema);
