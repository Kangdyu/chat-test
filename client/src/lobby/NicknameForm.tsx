import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../app/store';
import { useSocket } from '../socket/SocketProvider';
import { setId, setNickname } from '../user/userSlice';

const Form = styled.form`
  width: 400px;
  height: 50px;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 25px;
  border: 2px solid #bbb;
  outline: none;
  padding: 0 20px;
  text-align: center;
  font: inherit;
  font-size: 3rem;
`;

function NicknameForm() {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const socket = useSocket();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setNickname(value));
    socket.emit('user/nickname', value);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    socket.on('user/id', (id: string) => {
      dispatch(setId(id));
    });
  }, [socket, dispatch]);

  return (
    <Form onSubmit={onSubmit}>
      <Input ref={inputRef} type="text" value={value} onChange={onChange} />
    </Form>
  );
}

export default NicknameForm;
