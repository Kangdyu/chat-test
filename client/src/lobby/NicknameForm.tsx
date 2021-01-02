import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../app/store';
import { useSocket } from '../socket/SocketProvider';
import { userActions } from '../user/userSlice';

const Form = styled.form`
  width: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 25px;
  border: 2px solid #bbb;
  outline: none;
  padding: 0 20px;
  text-align: center;
  font: inherit;
  font-size: 3rem;

  margin-bottom: 10px;
`;

const ColorInput = styled.input`
  width: 100px;
  height: 40px;
`;

function NicknameForm() {
  const [nickname, setNickname] = useState('');
  const [color, setColor] = useState('black');
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const socket = useSocket();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(userActions.setNickname(nickname));
    dispatch(userActions.setNicknameColor(color));
    socket.emit('user/login', nickname, color);
  };

  const onNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  const onColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    socket.on('user/id', (id: string) => {
      dispatch(userActions.setId(id));
    });
  }, [socket, dispatch]);

  return (
    <Form onSubmit={onSubmit}>
      <TextInput
        ref={inputRef}
        type="text"
        value={nickname}
        onChange={onNicknameChange}
        placeholder="Enter your nickname"
      />
      <ColorInput type="color" value={color} onChange={onColorChange} />
    </Form>
  );
}

export default NicknameForm;
