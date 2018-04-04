import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketsService } from './services/sockets.service';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from "@angular/forms";
import { routing } from "./app.routing";
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { StateService } from './services/state.service';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    routing,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [SocketsService, AuthService, StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
