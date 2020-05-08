const express = require("express")
const cookieParser = require("cookie-parser")
const apiRouter = require("./api/api-router")


const server = express()
const port = process.env.PORT || 5000


server.use(express.json())
server.use(cookieParser())

server.use("/api", apiRouter)


server.get("/", (req, res, next) => {
    res.json({
        message: "Welcome to our API",
    })
})

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong",
    })
})

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})