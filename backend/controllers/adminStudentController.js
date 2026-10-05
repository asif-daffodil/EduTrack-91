const Student = require("../models/student")

const allStudents = async (req, res) => {
    try {
        const students = await Student.find()
        res.status(200).json(students)
    } catch (err) {
        res.status(500).json({ message: "Internal server error" })
    }
}

const singleStudent = async (req, res) => {
    const { id } = req.params
    try {
        const student = await Student.findById(id)
        res.status(200).json(student)

    }catch (err) {
        res.status(500).json({ message: "Internal server error" })
    }
}

const addStudents = async (req, res) => {
    try {
        const { name, photo, email, phone, dateOfBirth, gender, address, department, batch } = req.body
    
        if ( !name || !photo || !email || !phone || !dateOfBirth || !gender || !address || !department || !batch) {
            return res.status(400).json({message : "All fields are required"})
        }

        const student = await Student.create({ name, photo, email, phone, dateOfBirth, gender, address, department, batch })

        res.status(201).json(student)
    }catch (err) {
        res.status(500).json({ message: "Internal server error" })
    }
}

module.exports = {
    allStudents,
    singleStudent,
    addStudents
}