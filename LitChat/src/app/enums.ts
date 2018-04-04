export enum Action {
    JOINED,
    LEFT,
    RENAME
  }
  
  // Socket.io events
  export enum Event {
    CONNECT = 'connect',
    DISCONNECT = 'disconnect'
  }

  export class User {
    constructor(private name: string) {}
}

  export class Message {
    // public dateTime: any;
    constructor(public from: User, public content: string, public dateTime: any) {}
}

export class ChatMessage extends Message{
    constructor(from: User, content: string, dateTime) {
        super(from, content, dateTime);
    }
}   