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

interface IUserMessage {
  senderId: string;
  text: string;
}

enum MessageType {
  'Common',
  'Alert',
  'Whisper',
}

interface IMessage {
  type: MessageType;
  text: string;
  senderId?: string;
  senderNickname?: string;
  senderColor?: string;
}

interface IUser {
  id: string;
  nickname: string;
  color: string;
}

interface IUsers {
  [id: string]: IUser;
}

let users: IUsers = {};

io.on('connection', (socket: Socket) => {
  console.log('a user connected: ', socket.id);

  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);
    io.emit('chat/leave', users[socket.id]);
    delete users[socket.id];
    io.emit('chat/peopleList', users);
  });

  socket.on('user/nickname', (nickname: string) => {
    console.log(`Set nickname: ${socket.id}/${nickname}`);
    const newUser: IUser = {
      id: socket.id,
      nickname,
      color: 'black',
    };
    users[socket.id] = newUser;
    socket.emit('user/id', socket.id);
    io.emit('chat/enter', newUser);
    io.emit('chat/peopleList', users);
  });

  socket.on('chat/message', (blob: IUserMessage) => {
    const { senderId, text } = blob;
    const sender = users[senderId];
    if (!sender) {
      console.error(`Cannot find sender id: ${senderId}`);
      return;
    }

    console.log(`${sender.nickname}(${senderId}): ${blob.text}`);

    const message: IMessage = {
      type: MessageType.Common,
      text,
      senderId,
      senderNickname: sender.nickname,
      senderColor: sender.color,
    };
    io.emit('chat/message', message);
  });
});
