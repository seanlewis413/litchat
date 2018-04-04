import { Injectable } from '@angular/core';
import { User } from "../enums";

@Injectable()
export class StateService {
  user: User;

  constructor() { }

  getUser(){
    return this.user;
  }

  setUser(user){
    this.user = new User(user);
  }
}
