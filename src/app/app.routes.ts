import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EventsComponent } from './pages/events/events.component';
import { ForumComponent } from './pages/forum/forum.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ArticlesComponent } from './pages/articles/articles.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'events', component: EventsComponent },
    { path: 'forum', component: ForumComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'articles', component: ArticlesComponent },
];
