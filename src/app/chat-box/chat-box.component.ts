import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
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
export class ChatBoxComponent implements OnInit, AfterViewInit {
  messages: Message[] = []
  startIndex: number = 0;
  pageSize: number = 10;
  newMessageContent: string = "";
  isLoading: boolean = false;
  @ViewChild('chatContainer') private chatContainer!: ElementRef<HTMLDivElement>;


  constructor(private messageService: MessageService, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.loadMessages();
  }

  ngAfterViewInit(): void {
    this.scrollToBottom();
  }

  loadMessages(): void {
    var newMessages = this.messageService.getMessages(this.startIndex, this.pageSize);
    if(newMessages.length > 0) {
      this.messages = this.messages.concat(newMessages);
      this.startIndex = this.messages.length;
    }
  }

  sendMessage(content: string) {
    if(!content) {
      return;
    }
    const newMessage: Message = {
      id: this.messages.length + 1,
      sender: "Neel Dave(you)",
      content: content,
      timestamp: new Date(),
      profileColor: '#bf5f5f',
      senderType: SenderType.Self
    }

    this.messageService.sendMessage(newMessage);
    this.newMessageContent = "";
    this.loadMessages();
    this.scrollToBottom();
  }

  onChatScroll(event: any): void {
    const element = event.target;
    const atTop = element.scrollTop === 0;
    if (atTop && !this.isLoading) {
      // Load more messages when scrolled to top and not already loading
      this.isLoading = true;
      this.loadMessages(); // Simulate loading more messages
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    }
  }

  scrollToBottom(): void {
    // Set the scroll position to the bottom of the chat container
    this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight + 50;
  }
}
