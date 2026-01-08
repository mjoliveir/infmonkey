import { Routes } from '@angular/router';
import { History } from './history/history';
import { Home } from './home/home';
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'history', component: History },
];