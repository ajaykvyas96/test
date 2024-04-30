import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { Message, SenderType } from '../models/message.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-chat-box',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.css'
})
export class ChatBoxComponent {
  messages: Message[] = []
  currentPage: number = 1;
  pageSize: number = 10;
  totalMessages: number = 0;
  newMessageContent: string = "";

  constructor(private messageService: MessageService) {
    this.loadMessages();
  }

  loadMessages(): void {
    this.messages = this.messageService.getMessages(this.currentPage, this.pageSize);
    console.log(this.messages.length)
    console.log(((this.currentPage*this.pageSize) < this.messages.length));
    this.totalMessages = this.messageService.getMessageCount();
  }

  sendMessage(content: string) {
    if(!content) {
      return;
    }
    const newMessage: Message = {
      id: this.messages.length + 1,
      sender: "Neel Dave",
      content: content,
      timestamp: new Date(),
      profileColor: '#bf5f5f',
      senderType: SenderType.Self
    }

    this.messageService.sendMessage(newMessage);
    this.newMessageContent = "";
    this.loadMessages();
  }

  loadNextPage(): void {
    this.currentPage++;
    this.loadMessages();
  }

  loadPreviousPage(): void {
    if(this.currentPage > 1) {
      this.currentPage--;
      this.loadMessages();
    }
  }
}
