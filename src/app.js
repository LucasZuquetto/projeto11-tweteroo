import express from 'express'
import cors from 'cors'

const server = express()

server.use(cors())
server.use(express.json())

const users = []
const tweets = []

server.post('/sign-up', (req, res) => {
    const {username, avatar} = req.body
    if(!username || !avatar){
        res.status(400).send('Todos os campos são obrigatórios!')
        return
    }
    users.push(req.body)
    res.status(201).send('OK')
})

server.post('/tweets', (req, res) => {
    const {username, tweet} = req.body
    if(!username || !tweet){
        res.status(400).send('Todos os campos são obrigatórios!')
        return
    }
    tweets.push(req.body)
    res.status(201).send("OK")
})

server.get('/tweets', (req, res) => {
    tweets.forEach(tweet => {
        const user = users.find(user => tweet.username === user.username)
        tweet.avatar = user.avatar
    })
    const lastTweets = tweets.slice(-10)
    res.send(lastTweets)
})

server.listen(5000,() => console.log('listening on port 5000'))