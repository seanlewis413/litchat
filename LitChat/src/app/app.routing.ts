import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';



const appRoutes: Routes = [
    { path: '', component: ChatComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
