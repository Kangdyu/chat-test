import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000');

function App() {
  const [value, setValue] = useState<string>('');
  const chatRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    socket.on('chat message', (msg: string) => {
      const chat = document.createElement('li');
      chat.innerText = msg;
      chatRef.current?.appendChild(chat);
    });
  }, []);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    socket.emit('chat message', value);
    setValue('');
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <main>
      <ul ref={chatRef} style={{ listStyle: 'none' }}></ul>
      <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={onChange} />
      </form>
    </main>
  );
}

export default App;
