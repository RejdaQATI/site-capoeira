import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Chemin par défaut
  { path: 'home', component: HomeComponent }, // Optionnel si vous voulez "/home" aussi
];
