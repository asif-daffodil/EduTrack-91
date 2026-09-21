const mongoose = require("mongoose")
const courseSchema = require("../migrations/courseSchema")

const Course = mongoose.model("Course", courseSchema)

module.exports = Course
