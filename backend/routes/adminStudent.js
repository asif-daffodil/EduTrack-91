const express = require("express")

const checkAuth = require("../middlewares/checkAuth")
const isAdmin = require("../middlewares/isAdmin")
const { allStudents, singleStudent, addStudents } = require("../controllers/adminStudentController")

const router = express.Router()

router.get("/admin/students", checkAuth, isAdmin, allStudents)
router.get("/admin/students/:id", checkAuth, isAdmin, singleStudent)
router.post("/admin/students", checkAuth, isAdmin, addStudents)

module.exports = router