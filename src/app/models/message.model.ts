export interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: Date;
  profileColor: string;
  senderType: SenderType;
}

export enum SenderType {
  Self,
  Other
}
