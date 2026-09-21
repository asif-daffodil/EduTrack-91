const mongoose = require("mongoose")

const enrollmentSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true
    },

    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true
    },

    batch: {
      type: String,
      required: true
    },

    enrollmentDate: {
      type: Date,
      default: Date.now
    },

    status: {
      type: String,
      enum: ["active", "completed", "cancelled"],
      default: "active"
    }
  },
  {
    collection: "enrollments",
    timestamps: true
  }
);

module.exports = enrollmentSchema