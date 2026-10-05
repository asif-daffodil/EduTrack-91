const express = require("express")

const checkAuth = require("../middlewares/checkAuth")
const isAdmin = require("../middlewares/isAdmin")
const { dashboard } = require("../controllers/adminController")
const router = express.Router()

router.get("/admin/dashboard", checkAuth, isAdmin, dashboard)

module.exports = router