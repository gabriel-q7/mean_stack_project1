const express = require("express")

const app = express()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
        'Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept'
    )
    res.setHeader(
        'Acess-Control-Allow-Methods',
        'GET, POST, PATCH, DELETE, OPTIONS'
    )
    next()
})

app.post('/api/posts', (req, res, next) => {
    console.log()
})

app.use('/api/posts', (req, res, next) => {
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