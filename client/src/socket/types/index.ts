export interface IUserMessage {
  senderId: string;
  text: string;
}

export enum MessageType {
  'Common',
  'Alert',
  'Whisper',
}

export interface IMessage {
  type: MessageType;
  text: string;
  senderId?: string;
  senderNickname?: string;
  senderColor?: string;
}
