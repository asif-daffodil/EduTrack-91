const mongoose = require("mongoose")
const enrollmentSchema = require("../migrations/enrollmentSchema")

const Enrollment = mongoose.model("Enrollment", enrollmentSchema)

module.exports = Enrollment
