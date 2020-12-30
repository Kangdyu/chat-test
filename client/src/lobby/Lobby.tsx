import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import ChatRoom from '../chat/ChatRoom';
import NicknameModal from './NicknameModal';

function Lobby() {
  const nickname = useSelector((state: RootState) => state.user.nickname);

  return (
    <>
      {!nickname && <NicknameModal />}
      {nickname && <ChatRoom />}
    </>
  );
}

export default Lobby;
