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
        const user = await User.find({ id })
        res.status(200).json({ user })
    } catch (err) {
        res.status(500).json({ message: "Internal server error" })
    }
}

const changePassword = async (req, res) => {
    try {
        const { id } = req.params
        const { oldPass, newPass } = req.body

        if (!oldPass || !newPass) {
            return res.status(400).json({ message: "Old password and new password is require" })
        }

        const user = await User.findById(id)

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        const isOldPassValid = await bcrypt.compare(oldPass, user.password)

        if (!isOldPassValid) {
            return res.status(401).json({ message: "Invalid old password" })
        }

        const hashNewPass = await bcrypt.hash(newPass, +process.env.SALT_ROUNDS)

        await User.findByIdAndUpdate(id, { password: hashNewPass })

        res.status(200).json({ message: "Password changes successfully" })
    } catch (err) {
        console.error(err)
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
    changePassword,
    logout
}