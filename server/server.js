// server/server.js
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const { Server } = require('socket.io');
const io = new Server(http);

const PORT = 3000;

// Разрешаем статические файлы Vite после сборки
app.use(express.static('../client/dist'));

io.on('connection', (socket) => {
  console.log('🟢 New player connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('🔴 Player disconnected:', socket.id);
  });
});

http.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
