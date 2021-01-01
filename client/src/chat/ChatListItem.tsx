import styled from 'styled-components';
import { IMessage, MessageType } from '../socket/types';

const CommonMessage = styled.li``;

const AlertMessage = styled.li``;

const WhisperMessage = styled.li``;

type Props = {
  message: IMessage;
};

function ChatListItem({ message }: Props) {
  return (
    <>
      {message.type === MessageType.Common && (
        <CommonMessage>
          {message.senderNickname}: {message.text}
        </CommonMessage>
      )}
      {message.type === MessageType.Alert && (
        <AlertMessage>{message.text}</AlertMessage>
      )}
      {message.type === MessageType.Whisper && (
        <WhisperMessage>
          {message.senderNickname}: {message.text}
        </WhisperMessage>
      )}
    </>
  );
}

export default ChatListItem;
