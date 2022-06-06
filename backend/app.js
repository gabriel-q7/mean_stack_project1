const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const postsRoutes = require("./routes/posts")


const app = express()

mongoose.connect("mongodb+srv://gabriel:CGrhp1khXZz5Tj3f@cluster0.c3uye.mongodb.net/node-angular?retryWrites=true&w=majority")
    .then(() => {
        console.log("Connected to mongoDB!")
    })
    .catch(() => {
        console.log("Connection failed...")
    })

app.use(bodyParser.json())

//Header config.
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS'
    )
    next()
})

app.use("/api/posts", postsRoutes)

module.exports = app