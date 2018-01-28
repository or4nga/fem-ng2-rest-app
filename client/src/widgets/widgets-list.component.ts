import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WidgetsService } from './widgets-service';
import { Highlight } from './highlight';

@Component({
  selector: 'widgets-list',
  template: `
  <div *ngFor="let widget of widgets" (click)="selected.emit(widget)"
    class="widget-card mdl-card mdl-shadow--2dp" highlight [pos]="widget.id">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text">{{widget.name}}</h2>
    </div>
    <div class="mdl-card__supporting-text">
      {{widget.cost}}
    </div>
    <button (click)="toggle($event, widget)">Toggle Select</button>
    <h1 *ngIf="activeId === widget.id">Selected</h1>
  </div>
  `,
  styles: [
    `
  .widget-card {
    transition: background-color .4s
  }
  `
  ],
  directives: [Highlight]
})
export class WidgetsList {
  @Input()
  widgets: any[];
  @Output()
  selected = new EventEmitter();

  activeId = 0;

  toggle(event, widget) {
    if (this.activeId !== 0) {
      this.activeId = 0;
    } else {
      this.activeId = widget.id;
    }
  }
}
