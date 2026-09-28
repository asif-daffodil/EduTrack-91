const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User = require("../models/user")

const login = async (req, res) => {
    try {
        const { username, password } = req.body
        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required" })
        }

        const user = await User.findOne({ username })
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" })
        }
        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" })

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000
        })

        res.json({ message: "Login successful" })

    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
}

const me = async (req, res) => {
    const id = req?.user?.id

    try {
        const user = await User.find({id})
        res.status(200).json({user})
    }catch (err) {
        res.status(500).json({ message: "Internal server error" })
    }
}

const logout = (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    })

    res.json({
        message: "Logout successful"
    })
}

module.exports = {
    login,
    me,
    logout
}