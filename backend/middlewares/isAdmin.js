const isAdmin = (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ message: 'Invalid login session' })
    }
    
    if(req.user.role !== "admin") {
        return res.status(401).json({ message: 'User is not an admin' })
    }

    next()
}

module.exports = isAdmin