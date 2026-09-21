const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    code: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true
    },

    description: {
      type: String,
      trim: true
    },

    duration: {
      type: String,
      required: true
    },

    fee: {
      type: Number,
      required: true,
      min: 0
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active"
    }
  },
  {
    collection: "courses",
    timestamps: true
  }
);

module.exports = courseSchema