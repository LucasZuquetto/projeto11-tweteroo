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
    res.status(200).send('OK')
})

server.listen(5000,() => console.log('listening on port 5000'))