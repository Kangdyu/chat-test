import { useState } from 'react';
import styled from 'styled-components';
import { useSocket } from '../socket/SocketProvider';

const Container = styled.section`
  border: 1px solid black;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
`;

function ChatForm() {
  const [value, setValue] = useState('');
  const socket = useSocket();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    socket.emit('chat message', value);
    setValue('');
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Input type="text" value={value} onChange={onChange} />
      </Form>
    </Container>
  );
}

export default ChatForm;
