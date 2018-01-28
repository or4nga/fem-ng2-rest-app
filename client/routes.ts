import { Items } from './src/items/items.component';
import { Routes } from '@angular/router';
import { Widgets } from './src/widgets/widgets';

export const routes: Routes = [
  { path: '', component: Items },
  { path: 'items', component: Items },
  { path: '*', component: Items },
  // { path: 'widgets/:id', component: Widgets }
  { path: 'widgets', component: Widgets }
];
