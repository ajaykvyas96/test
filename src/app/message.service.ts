import { Injectable } from '@angular/core';
import { Message, SenderType } from './models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messages : Message[] = [
    {
      id: 1,
      content: "The conversation ratio is dropping fast the last couple of days, whats wrong!",
      sender: "Henry Bol",
      timestamp: new Date('2024-04-30T11:24:00'),
      profileColor: '#4a38ca',
      senderType: SenderType.Other
    }, {
      id: 2,
      content: "It seems there are some stock issues",
      sender: "Mehdi Mirzaei",
      timestamp: new Date('2024-04-30T11:46:00'),
      profileColor: '#0a8d2a',
      senderType: SenderType.Other
    }
  ];

  constructor() {
    // this.sortMessages();
  }

  getMessages(page: number, pageSize: number) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return this.messages.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime()).slice(startIndex, endIndex);
  }

  getMessageCount(): number {
    return this.messages.length;
  }
  sendMessage(message : Message) {
    this.messages.push(message);
  }

  private sortMessages() {
    this.messages.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  }
}
