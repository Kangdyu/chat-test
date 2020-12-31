import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSocket } from '../socket/SocketProvider';
import { IUsers } from '../user/types';

const Container = styled.section`
  background-color: white;
  border: 1px solid black;
  grid-row: span 2;

  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 2rem;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
`;

const List = styled.ul`
  width: 100%;
  font-size: 1.5rem;
  line-height: 1.5;
`;

function ChatPeopleList() {
  const socket = useSocket();
  const [users, setUsers] = useState<IUsers>({});

  useEffect(() => {
    socket.on('chat/peopleList', (users: IUsers) => {
      setUsers(users);
    });
  }, [socket]);

  return (
    <Container>
      <Title>People</Title>
      <List>
        {Object.values(users).map((user) => (
          <li key={user.id} style={{ color: `${user.color}` }}>
            {user.nickname}
          </li>
        ))}
      </List>
    </Container>
  );
}

export default ChatPeopleList;
