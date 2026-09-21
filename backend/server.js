const app = require("./app")
const cors = require("cors")
require("dotenv").config()
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}))

require("./db") // Connect to MongoDB

const authRouter = require("./routes/auth")
app.use("/api", authRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})