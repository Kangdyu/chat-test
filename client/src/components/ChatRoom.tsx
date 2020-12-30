import styled from 'styled-components';
import ChatForm from './ChatForm';
import ChatList from './ChatList';
import ChatPeopleList from './ChatPeopleList';

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.main`
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
      <Grid>
        <ChatPeopleList />
        <ChatList />
        <ChatForm />
      </Grid>
    </Container>
  );
}

export default ChatRoom;
