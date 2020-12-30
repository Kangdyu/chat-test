import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useSocket } from '../socket/SocketProvider';

const Container = styled.section`
  border: 1px solid black;
  padding: 20px;
`;

function ChatList() {
  const socket = useSocket();
  const chatRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    socket.on('chat message', (msg: string) => {
      const chat = document.createElement('li');
      chat.innerText = msg;
      chatRef.current?.appendChild(chat);
    });
  }, [socket]);

  return (
    <Container>
      <ul ref={chatRef} style={{ listStyle: 'none' }}></ul>
    </Container>
  );
}

export default ChatList;
