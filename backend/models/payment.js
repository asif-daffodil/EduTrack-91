const mongoose = require("mongoose")
const paymentSchema = require("../migrations/paymentSchema")

const Payment = mongoose.model("Payment", paymentSchema)

module.exports = Payment
