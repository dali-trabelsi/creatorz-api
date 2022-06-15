const {
  Schema,
  model,
  Types: { ObjectId },
} = require("mongoose");

const courseLessonSchema = new Schema(
  {
    chapter: { type: ObjectId, required: true, ref: "CourseChapter" },
    title: { type: String, required: true },
    overview: { type: String, required: true },
    description: { type: String, required: true },
    thumbnail: { type: String, required: true },
    order: { type: Number, required: true },
    quiz: [
      { id: Number, question: String, answer: String, distractors: [String] },
    ],
    elements: [{ type: ObjectId, required: true, ref: "CourseLessonElement" }],
  },
  { timestamps: true }
);

module.exports = CourseLesson = model("CourseLesson", courseLessonSchema);
