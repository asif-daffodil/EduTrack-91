const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    name: {
      type: String,
      required: true,
      trim: true
    },

    photo: {
      type: String,
      default: null
    },

    email: {
      type: String,
      trim: true,
      lowercase: true
    },

    phone: {
      type: String,
      trim: true
    },

    dateOfBirth: {
      type: Date
    },

    gender: {
      type: String,
      enum: ["male", "female", "other"]
    },

    address: {
      type: String,
      trim: true
    },

    department: {
      type: String,
      trim: true
    },

    batch: {
      type: String,
      trim: true
    },

    enrollmentDate: {
      type: Date,
      default: Date.now
    },

    status: {
      type: String,
      enum: ["active", "inactive", "completed"],
      default: "active"
    }
  },
  {
    collection: "students",
    timestamps: true
  }
);

module.exports = studentSchema