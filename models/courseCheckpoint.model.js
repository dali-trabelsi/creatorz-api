const { Schema, model } = require("mongoose");

const { CHECKPOINT_TYPE } = require("./enums");

const courseCheckpointSchema = new Schema(
  {
    type: {
      type: String,
      enum: Object.values(CHECKPOINT_TYPE),
      required: true,
    },
    quiz: [{ question: String, answer: String, distractors: [String] }],
    task: String,
    isPassed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = CourseCheckpoint = model(
  "CourseCheckpoint",
  courseCheckpointSchema
);
