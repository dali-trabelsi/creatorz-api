const {
  Schema,
  model,
  Types: { ObjectId },
} = require("mongoose");

const courseChapterSchema = new Schema(
  {
    title: { type: String, required: true },
    overview: { type: String, required: true },
    description: { type: String, required: true },
    thumbnail: { type: String, required: true },
    order: { type: Number, required: true },
    lessons: [{ type: ObjectId, required: true, ref: "CourseLesson" }],
    isCheckpoint: { type: Boolean, required: true },
    checkpoint: { type: ObjectId, ref: "CourseCheckpoint" },
  },
  { timestamps: true }
);

module.exports = CourseChapter = model("CourseChapter", courseChapterSchema);
