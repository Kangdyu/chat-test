import styled from 'styled-components';
import { IMessage, MessageType } from '../socket/types';

const Message = styled.li`
  margin-bottom: 10px;
`;

const Sender = styled.span<{ color: string }>`
  color: ${({ color }) => color};
`;

const CommonMessage = styled(Message)``;

const AlertMessage = styled(Message)`
  text-align: center;
  padding: 5px 0;
  background-color: #aaa;
  border-radius: 20px;
  color: white;
`;

const WhisperMessage = styled(Message)``;

type Props = {
  message: IMessage;
};

function ChatListItem({ message }: Props) {
  return (
    <>
      {message.type === MessageType.Common && (
        <CommonMessage>
          <Sender color={message.senderColor!}>{message.senderNickname}</Sender>
          : {message.text}
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
