import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useSocket } from '../socket/SocketProvider';
import { IMessage } from '../socket/types';

const Container = styled.section`
  background-color: white;
  border: 1px solid black;
  padding: 20px;
  font-size: 2rem;
`;

function ChatList() {
  const socket = useSocket();
  const chatRef = useRef<HTMLUListElement>(null);
  const [chatList, setChatList] = useState<IMessage[]>([]);

  useEffect(() => {
    socket.on('chat/message', (message: IMessage) => {
      setChatList((prev) => prev.concat(message));
    });
  }, [socket]);

  return (
    <Container>
      <ul ref={chatRef} style={{ listStyle: 'none' }}>
        {chatList.map((chat, idx) => (
          <li key={idx}>
            {chat.senderNickname}: {chat.text}
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default ChatList;
