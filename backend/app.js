const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, DELETE, OPTIONS'
    )
    next()
})

app.post('/api/posts', (req, res, next) => {
    const posts = req.body
    console.log(posts)
    res.status(201).json({
        message: 'Post added successfully'
    })
})

app.get('/api/posts', (req, res, next) => {
    const posts = [
        {
            id: 'fasd423',
            title: 'first server-side post',
            content: "content server-side"
        },
        {
            id: 'fasd432',
            title: 'second server-side post',
            content: "content server-side"
        },
    ]
    res.status(200).json({
        message: 'Posts fetched succesfully!',
        posts: posts
    })
})

module.exports = app