import express, { Application, Request, Response } from 'express';
import { Server, Socket } from 'socket.io';

const port = 4000;
const app: Application = express();

const server = app.listen(port, () =>
  console.log(`Listening on: http://localhost:${port}`)
);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket: Socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});
