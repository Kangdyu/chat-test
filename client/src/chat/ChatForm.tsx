import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../app/store';
import { useSocket } from '../socket/SocketProvider';
import { IUserMessage } from '../socket/types';

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
  const id = useSelector((state: RootState) => state.user.id);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message: IUserMessage = {
      senderId: id,
      text: value,
    };
    socket.emit('chat/message', message);
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
