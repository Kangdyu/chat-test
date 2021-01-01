import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSocket } from '../socket/SocketProvider';
import { IMessage, MessageType } from '../socket/types';
import { IUser } from '../user/types';
import ChatListItem from './ChatListItem';

const Container = styled.section`
  background-color: white;
  border: 1px solid black;
  padding: 20px;
  font-size: 2rem;
`;

const List = styled.ul`
  list-style: none;
  line-height: 1.5;
`;

function ChatList() {
  const socket = useSocket();
  const [chatList, setChatList] = useState<IMessage[]>([]);

  useEffect(() => {
    socket.on('chat/enter', (user: IUser) => {
      const alertMessage: IMessage = {
        type: MessageType.Alert,
        text: `${user.nickname} has joined the room.`,
      };
      setChatList((prev) => prev.concat(alertMessage));
    });
    socket.on('chat/leave', (user: IUser) => {
      const alertMessage: IMessage = {
        type: MessageType.Alert,
        text: `${user.nickname} has left the room.`,
      };
      setChatList((prev) => prev.concat(alertMessage));
    });
    socket.on('chat/message', (message: IMessage) => {
      setChatList((prev) => prev.concat(message));
    });
  }, [socket]);

  return (
    <Container>
      <List>
        {chatList.map((chat, idx) => (
          <ChatListItem key={idx} message={chat} />
        ))}
      </List>
    </Container>
  );
}

export default ChatList;
