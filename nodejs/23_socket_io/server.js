const http = require('http');
const express = require('express');
const SocketIO = require('socket.io');

const app = express();
const PORT = 8000;

//http서버
const server = http.createServer(app);

//socket 서버
const io = SocketIO(server);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('client');
});

app.get('/chat', (req, res) => {
  res.render('chat');
});

const sockets = [];
io.on('connection', (socket) => {
  // 맨처음 채팅
  // socket.on('open_msg',(arg,cb)=>{
  //     console.log(arg)
  //     cb(arg)
  // })

  // socket.on('form_msg',(arg)=>{
  //     console.log(arg)
  //     io.sockets.emit()
  //     socket.emit('backend_msg',arg)
  // })

  //실습 2
  console.log('조인 전', socket.rooms);
  socket.on('join', (res) => {
    //채팅방을 생성하는 방법은 join(방 id) 사용
    socket.join(res);
    socket.room = res;
    const roomInfo = io.sockets.adapter.rooms.get(socket.room)?.size;
    console.log('Info', roomInfo);
    console.log('조인 후', socket.rooms);
    //broadcast는 나를 제외한 전체 사용자(브라우저)에게 메세지 전달
    socket.broadcast.to(res).emit('create', '새로운 브라우저 입장');
  });

  socket.on('message', (res) => {
    //io.to(특정방 id).emit(이벤트) <= 특정방의 전체 사용자에게 메세지 전달
    console.log(res);
    io.to(socket.room).emit('chat', res, socket.id);
  });

  socket.on('leave', () => {
    socket.leave(socket.room);
    // socket.emit('chat',`${socket.adapter.rooms}`)
    const roomInfo = io.sockets.adapter.rooms.get(socket.room)?.size;
    console.log('Info', roomInfo);
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
