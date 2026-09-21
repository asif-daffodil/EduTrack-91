const mongoose = require("mongoose")
const studentSchema = require("../migrations/studentSchema")

const Student = mongoose.model("Student", studentSchema)

module.exports = Student
