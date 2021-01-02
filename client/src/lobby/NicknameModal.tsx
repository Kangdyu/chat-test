import styled from 'styled-components';
import NicknameForm from './NicknameForm';

const Container = styled.div`
  width: 600px;
  height: 400px;
  border-radius: 40px;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #444;
  margin-bottom: 50px;
`;

function NicknameModal() {
  return (
    <Container>
      <Title>Simple Chat</Title>
      <NicknameForm />
    </Container>
  );
}

export default NicknameModal;
