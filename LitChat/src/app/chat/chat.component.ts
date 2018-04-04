import { Component, OnInit } from '@angular/core';
import { SocketsService } from "../services/sockets.service";
import { User, Message, Action, Event } from "../enums";
import { Router } from "@angular/router";
import { StateService } from '../services/state.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  action = Action;
  user: User = null;
  messages: Message[] = [];
  messageContent: string;
  ioConnection: any;

  constructor(private socketService: SocketsService,
              private router: Router,
              private stateService: StateService) { }

  ngOnInit() {
    this.initIoConnection();
    this.user = this.stateService.getUser();
  }

  initIoConnection(): void {
    this.socketService.initSocket();

    this.ioConnection = this.socketService.onMessage()
      .subscribe((message: Message) => {
        this.messages.push(message);
        this.messages.sort(function(){return Number(message.dateTime)});
      });

    this.socketService.onEvent(Event.CONNECT)
      .subscribe(() => {
        console.log('connected');
      });
      
    this.socketService.onEvent(Event.DISCONNECT)
      .subscribe(() => {
        console.log('disconnected');
      });
  }

  sendMessage(): void {
    console.log('sending message... ', this.messageContent);

    this.socketService.send({
      from: this.user,
      content: this.messageContent,
      dateTime: Date()
    });
    this.messageContent = null;
  }


}
