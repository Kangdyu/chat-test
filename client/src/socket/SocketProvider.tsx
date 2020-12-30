import { createContext, useContext } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000');

const SocketContext = createContext(socket);

type Props = {
  children: React.ReactNode;
};

function SocketProvider({ children }: Props) {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}

export default SocketProvider;

export function useSocket() {
  return useContext(SocketContext);
}
