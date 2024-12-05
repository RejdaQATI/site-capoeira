import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EventsComponent } from './pages/events/events.component';
import { ForumComponent } from './pages/forum/forum.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { DiscussionDetailComponent } from './pages/forum/discussion-detail/discussion-detail.component';
import { EventDetailComponent } from './pages/events/event-detail.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'forum', component: ForumComponent },
    { path: 'forum/discussion/:id', component: DiscussionDetailComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'articles', component: ArticlesComponent },
    { path: 'events', component: EventsComponent },
    { path: 'events/:id', component: EventDetailComponent },
];
