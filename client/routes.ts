import { Items } from './src/items/items.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '',            component: Items },
  {path: 'items',       component: Items},
  {path: '*',           component: Items }
];
