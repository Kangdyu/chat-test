import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

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

function LobbyForm() {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValue('');
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Form onSubmit={onSubmit}>
      <Input ref={inputRef} type="text" value={value} onChange={onChange} />
    </Form>
  );
}

export default LobbyForm;
