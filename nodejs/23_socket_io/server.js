const http = require('http')
const express = require('express')
const SocketIO = require('socket.io')

const app = express()
const PORT = 8000

//http서버
const server = http.createServer(app)

//socket 서버
const io = SocketIO(server)

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('client')
})

const sockets = []
io.on('connection',(socket)=>{
    socket.on('open_msg',(arg,cb)=>{
        console.log(arg)
        cb(arg)
    })

    socket.on('form_msg',(arg)=>{
        console.log(arg)
        io.sockets.emit()
        socket.emit('backend_msg',arg)
    })
})

server.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})