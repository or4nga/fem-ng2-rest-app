import { Component, Input } from '@angular/core';
// import {WidgetsService} from './widgets-service';
// import { Widgets } from './widgets-service';

@Component({
  selector: 'widget-details',
  template: `
  <h1> {{selectedWidget.name}} </h1>
  <h4> {{selectedWidget.cost}} </h4>
  `
})
export class WidgetDetails {
  @Input()
  selectedWidget;
}
