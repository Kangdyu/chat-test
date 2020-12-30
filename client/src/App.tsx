import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import ChatRoom from './components/ChatRoom';
import SocketProvider from './socket/SocketProvider';

const GlobalStyle = createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
  }
  
  body {
    width: 100vw;
    height: 100vh;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <SocketProvider>
        <ChatRoom />
      </SocketProvider>
    </>
  );
}

export default App;
