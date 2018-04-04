import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from "./login/login.component";


const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'chat', component: ChatComponent },
    { path: 'login', component: LoginComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
