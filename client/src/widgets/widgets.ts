import { Component } from '@angular/core';
import { WidgetsService } from './widgets-service';
import {ActivatedRoute} from '@angular/router';
import {WidgetsList} from './widgets-list.component';
import {WidgetDetails} from './widget-detail.component'

@Component({
  selector: 'widgets',
  template: `
    <div class="mdl-grid widgets">
    <div class="mdl-cell mdl-cell--6-col">
      <widgets-list [widgets]="widgets"
      (selected)="selectWidget($event)" (deleted)="deleteItem($event)">
      </widgets-list>
    </div>
    <div class="mdl-cell mdl-cell--6-col">
      <widget-details [selectedWidget]="selectedWidget"></widget-details>
    </div>
  </div>
   `,
  directives: [WidgetsList, WidgetDetails],
  providers: [WidgetsService]
})
export class Widgets {
  widgets = [];
  selectedWidget = '';
  constructor(_widgetsService: WidgetsService, private _params: ActivatedRoute) {
    this.widgets = _widgetsService.widgets;
    // this.activeWidget = this.widgets.find(widget => widget.id === parseInt(this._params.params.get('id')));
  }

  selectWidget(widget) {
    this.selectedWidget = widget;
  }
}
