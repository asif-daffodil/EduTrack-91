const mongoose = require("mongoose")
const userSchema = require("../migrations/userSchema")

const User = mongoose.model("User", userSchema)

module.exports = User