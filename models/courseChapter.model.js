const {
  Schema,
  model,
  Types: { ObjectId },
} = require("mongoose");

const courseChapterSchema = new Schema(
  {
    section: { type: ObjectId, required: true, ref: "CourseSection" },
    title: { type: String, required: true },
    overview: { type: String, required: true },
    description: { type: String, required: true },
    thumbnail: { type: String, required: true },
    order: { type: Number, required: true },
    lessons: [{ type: ObjectId, required: true, ref: "CourseLesson" }],
    checkpoint: { type: ObjectId, ref: "CourseCheckpoint", default: undefined },
  },
  { timestamps: true }
);

module.exports = CourseChapter = model("CourseChapter", courseChapterSchema);
