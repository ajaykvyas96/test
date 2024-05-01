import { Injectable } from '@angular/core';
import { Message, SenderType } from './models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messages : Message[] = [
    {
      id: 1,
      content: "Hey there! How's it going?",
      sender: "Henry Bol",
      timestamp: new Date('2024-04-30T11:24:00'),
      profileColor: '#4a38ca',
      senderType: SenderType.Other
    },
    {
      id: 2,
      content: "I'm doing well, thanks! How about you?",
      sender: "Mehdi mirzaei",
      timestamp: new Date('2024-04-30T11:46:00'),
      profileColor: '#0a8d2a',
      senderType: SenderType.Other
    },
    {
      id: 3,
      content: "Not bad, just working on some coding projects.",
      sender: "Henry Bol",
      timestamp: new Date('2024-04-30T11:54:00'),
      profileColor: '#4a38ca',
      senderType: SenderType.Other
    },
    {
      id: 4,
      content: "That sounds interesting! What kind of projects?",
      sender: "Mehdi mirzaei",
      timestamp: new Date('2024-04-30T12:02:00'),
      profileColor: '#0a8d2a',
      senderType: SenderType.Other
    },
    {
      id: 5,
      content: "I'm working on a web app for managing tasks.",
      sender: "Henry Bol",
      timestamp: new Date('2024-04-30T12:10:00'),
      profileColor: '#4a38ca',
      senderType: SenderType.Other
    },
    {
      id: 6,
      content: "Cool! Are you using any specific tech stack?",
      sender: "Mehdi mirzaei",
      timestamp: new Date('2024-04-30T12:18:00'),
      profileColor: '#0a8d2a',
      senderType: SenderType.Other
    },
    {
      id: 7,
      content: "Yes, I'm using Angular for the frontend and Node.js for the backend.",
      sender: "Henry Bol",
      timestamp: new Date('2024-04-30T12:26:00'),
      profileColor: '#4a38ca',
      senderType: SenderType.Other
    },
    {
      id: 8,
      content: "Awesome! Those are great choices.",
      sender: "Mehdi mirzaei",
      timestamp: new Date('2024-04-30T12:34:00'),
      profileColor: '#0a8d2a',
      senderType: SenderType.Other
    },
    {
      id: 9,
      content: "Indeed! How about you? What are you up to?",
      sender: "Henry Bol",
      timestamp: new Date('2024-04-30T12:42:00'),
      profileColor: '#4a38ca',
      senderType: SenderType.Other
    },
    {
      id: 10,
      content: "I'm working on a data analytics project using Python.",
      sender: "Mehdi mirzaei",
      timestamp: new Date('2024-04-30T12:50:00'),
      profileColor: '#0a8d2a',
      senderType: SenderType.Other
    },
    {
      id: 11,
      content: "That's fascinating! Python is powerful for data tasks.",
      sender: "Henry Bol",
      timestamp: new Date('2024-04-30T12:58:00'),
      profileColor: '#4a38ca',
      senderType: SenderType.Other
    },
    {
      id: 12,
      content: "Yes, it is! I'm enjoying the process.",
      sender: "Mehdi mirzaei",
      timestamp: new Date('2024-04-30T13:06:00'),
      profileColor: '#0a8d2a',
      senderType: SenderType.Other
    },
    {
      id: 13,
      content: "Glad to hear that. Keep up the great work!",
      sender: "Henry Bol",
      timestamp: new Date('2024-04-30T13:14:00'),
      profileColor: '#4a38ca',
      senderType: SenderType.Other
    },
    {
      id: 14,
      content: "Thanks! Same to you with your projects.",
      sender: "Mehdi mirzaei",
      timestamp: new Date('2024-04-30T13:22:00'),
      profileColor: '#0a8d2a',
      senderType: SenderType.Other
    }
  ];

  constructor() {
    // this.sortMessages();
  }

  getMessages(startIndex: number, pageSize: number) {
    const endIndex = startIndex + pageSize;
    console.log("get messages")
    return this.messages.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime()).slice(startIndex, endIndex);
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
