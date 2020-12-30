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

interface IMessageBlob {
  senderId: string;
  text: string;
}

interface IMessage extends IMessageBlob {
  senderNickname: string;
  senderColor: string;
}

interface IUser {
  id: string;
  nickname: string;
  color: string;
}

let users = new Map<string, IUser>();

io.on('connection', (socket: Socket) => {
  console.log('a user connected: ', socket.id);

  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);
  });

  socket.on('user/nickname', (nickname: string) => {
    console.log(`Set nickname: ${socket.id}/${nickname}`);
    const newUser: IUser = {
      id: socket.id,
      nickname,
      color: 'black',
    };
    users.set(socket.id, newUser);
    socket.emit('user/id', socket.id);
  });

  socket.on('chat/message', (blob: IMessageBlob) => {
    const { senderId, text } = blob;
    const sender = users.get(senderId);
    if (!sender) {
      console.error(`Cannot find sender id: ${senderId}`);
      return;
    }

    console.log(`${sender.nickname}(${senderId}): ${blob.text}`);

    const message: IMessage = {
      senderId,
      senderNickname: sender.nickname,
      senderColor: sender.color,
      text,
    };
    io.emit('chat/message', message);
  });
});
