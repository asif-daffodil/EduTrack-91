const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    password: {
      type: String,
      required: true
    },

    role: {
      type: String,
      enum: ["admin", "student"],
      required: true
    },

    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      default: null
    },

    isActive: {
      type: Boolean,
      default: true
    },

    lastLogin: {
      type: Date,
      default: null
    }
}, {
    collection: "users",
    timestamps: true
})

module.exports = userSchema