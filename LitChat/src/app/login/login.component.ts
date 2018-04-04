import { Component, OnInit } from '@angular/core';
import { SocketsService } from "../services/sockets.service";
import { StateService } from "../services/state.service";
import { User, Message, Action, Event } from "../enums";
import { Router } from "@angular/router";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: string;

  constructor(private stateService: StateService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {

  }

  enterName(){
    this.stateService.setUser(this.name);
    this.router.navigate(['chat']);
  }

  loginWithGoogle(){
    this.authService.signInWithGoogle().then((data) => 
      {this.stateService.setUser(data.user.displayName)})
        .then(() => this.router.navigate(['chat']));
  }

}
