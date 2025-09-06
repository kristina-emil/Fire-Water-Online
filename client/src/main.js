import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');
document.getElementById('app').innerText = "🔥 Welcome to Fire & Water Online!";


socket.on('connect', () => {
  console.log('🟢 Connected to server! My ID:', socket.id);
});
