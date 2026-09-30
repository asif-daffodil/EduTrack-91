const express = require("express")

const checkAuth = require("../middlewares/checkAuth")
const isAdmin = require("../middlewares/isAdmin")
const router = express.Router()

router.get("/admin/dashboard", checkAuth, isAdmin, (req, res) => {
    res.send("Admin Dasdhboard")
})

module.exports = router