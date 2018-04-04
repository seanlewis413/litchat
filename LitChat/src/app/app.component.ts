import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(
    private router: Router,
    private authService: AuthService
  ){}

  ngOnInit(){
    console.log("loaded...");
    if (this.authService.isLoggedIn()){
      this.router.navigate(['chat']);
    } else {
      this.router.navigate(['login']);
    }
  }

}
