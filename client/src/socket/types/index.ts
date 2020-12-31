export interface IMessageBlob {
  senderId: string;
  text: string;
}

export interface IMessage extends IMessageBlob {
  senderNickname: string;
  senderColor: string;
}
