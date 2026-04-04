import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Resume } from './components/resume/resume';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'resume', component: Resume },
  { path: '**', redirectTo: '' }
];
