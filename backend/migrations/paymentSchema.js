const mongoose = require("mongoose")

const paymentSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true
    },

    enrollment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Enrollment",
      required: true,
      unique: true
    },

    totalAmount: {
      type: Number,
      required: true,
      min: 0
    },

    paidAmount: {
      type: Number,
      default: 0,
      min: 0
    },

    dueAmount: {
      type: Number,
      default: 0,
      min: 0
    },

    status: {
      type: String,
      enum: ["paid", "partial", "unpaid"],
      default: "unpaid"
    },

    transactions: [
      {
        amount: {
          type: Number,
          required: true,
          min: 0
        },

        paymentDate: {
          type: Date,
          default: Date.now
        },

        method: {
          type: String,
          enum: ["cash", "bank", "mobile_banking", "other"]
        },

        receipt: {
          type: String,
          default: null
        },

        note: {
          type: String,
          default: ""
        }
      }
    ]
  },
  {
    collection: "payments",
    timestamps: true
  }
);

module.exports = paymentSchema