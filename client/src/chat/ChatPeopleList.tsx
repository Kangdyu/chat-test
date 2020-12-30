import styled from 'styled-components';

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
`;

function ChatPeopleList() {
  return (
    <Container>
      <Title>People</Title>
      <List></List>
    </Container>
  );
}

export default ChatPeopleList;
