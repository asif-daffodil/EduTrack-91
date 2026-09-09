const express = require("express")
const { me } = require("../controllers/authController")
const router = express.Router()

router.get("/auth/me", me)

module.exports = router