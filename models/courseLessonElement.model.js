const { Schema, model } = require("mongoose");
const { ObjectId } = require("mongoose").SchemaTypes;
const { LESSON_ELEMENT_TYPE } = require("./enums");

const courseLessonElementSchema = new Schema(
  {
    lesson: { type: ObjectId, required: true, ref: "CourseLesson" },
    type: {
      type: String,
      enum: Object.values(LESSON_ELEMENT_TYPE),
      required: true,
    },
    content: { type: String, required: true },
    order: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = CourseLessonElement = model(
  "CourseLessonElement",
  courseLessonElementSchema
);
