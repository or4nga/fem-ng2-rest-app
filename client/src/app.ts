import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { Widgets } from './widgets/widgets';

@Component({
  selector: 'my-app',
  template: require('./app.html'),
  directives: [ROUTER_DIRECTIVES]
})
export // export const routes: Routes = [{ path: '/Widgets', name: 'Widgets', component: Widgets, useAsDefault: true }]

class App {
  links = {
    items: ['/items'],
    // widgets: ['/widgets', { id: 1 }]
    widgets: ['/widgets']
  };
}
