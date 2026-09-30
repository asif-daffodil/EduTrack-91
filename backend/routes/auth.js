const express = require("express")
const { login, me, changePassword, logout } = require("../controllers/authController")
const checkAuth = require("../middlewares/checkAuth")
const router = express.Router()

router.post("/auth/login", login)
router.get("/auth/me", checkAuth, me)
router.post("/auth/logout", checkAuth, logout)
router.put("/auth/change-password/:id", checkAuth, changePassword)

module.exports = router