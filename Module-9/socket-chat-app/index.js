const express = require("express")
const app = express()
const http = require('http')
const {Server} = require('socket.io')

const server = http.createServer(app)
const io = new Server(server)

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/public/index.html')
})

io.on('connection', (socket) => {
    io.emit('connection', 'a user connected')
    console.log('SERVER - a user connected')
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})

server.listen(3000, () => {
    console.log('listening on *:3000')
})

