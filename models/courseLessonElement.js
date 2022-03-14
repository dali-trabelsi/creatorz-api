const { Schema, model } = require("mongoose");

const { LESSON_ELEMENT_TYPE } = require("./enums");

const courseLessonElementSchema = new Schema(
  {
    type: {
      type: String,
      enum: Object.values_id(LESSON_ELEMENT_TYPE),
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
