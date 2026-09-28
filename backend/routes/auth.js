const express = require("express")
const { login, me, logout } = require("../controllers/authController")
const checkAuth = require("../middlewares/checkAuth")
const router = express.Router()

router.post("/auth/login", login)
router.get("/auth/me", checkAuth, me)
router.post("/auth/logout", checkAuth, logout)

module.exports = router