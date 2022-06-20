const path = require("path")
const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

const postsRoutes = require("./routes/posts")
const userRoutes = require("./routes/user")

const app = express()

dotenv.config()

mongoose.connect(process.env.URL_DB)
    .then(() => {
        console.log("Connected to mongoDB!")
    })
    .catch(() => {
        console.log("Connection failed...")
    })

app.use(bodyParser.json())

app.use("/images", express.static(path.join("backend/images")))

//Header config.
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS'
    )
    next()
})

app.use("/api/posts", postsRoutes)
app.use("/api/user", userRoutes)

module.exports = app