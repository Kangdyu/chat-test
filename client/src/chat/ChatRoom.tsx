import styled from 'styled-components';
import ChatForm from './ChatForm';
import ChatList from './ChatList';
import ChatPeopleList from './ChatPeopleList';

const Container = styled.main`
  width: 1000px;
  height: 80%;
  border: 1px solid black;

  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 1fr 100px;
`;

function ChatRoom() {
  return (
    <Container>
      <ChatPeopleList />
      <ChatList />
      <ChatForm />
    </Container>
  );
}

export default ChatRoom;
