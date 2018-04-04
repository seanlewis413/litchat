import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketsService } from './services/sockets.service';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from "@angular/forms";
import { routing } from "./app.routing";


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    FormsModule,
    routing,
    BrowserModule
  ],
  providers: [SocketsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
