import {Component, Input, Output, EventEmitter, OnChanges, trigger, state, style, transition, animate} from '@angular/core';
import {Item} from './items.service';
import {entry} from './common.animations';

@Component({
  selector: 'items-list',
  template: `
  <div @entry="'left'" *ngIf="items">
    <div *ngFor="let item of items" (click)="selected.emit(item)"
      class="item-card mdl-card mdl-shadow--2dp" @itemStatus="itemSelectionStatus(item)">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">{{item.name}}</h2>
      </div>
      <div class="mdl-card__supporting-text">
        {{item.description}}
      </div>
      <div class="mdl-card__menu">
        <button (click)="deleted.emit(item); $event.stopPropagation();"
          class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
          <i class="material-icons">close</i>
        </button>
      </div>
    </div>
  </div>
  `,
  animations: [
    trigger('itemStatus', [
      state('deselected', style({
        transform: 'scale(1)',
        zIndex: 0
      })),
      state('selected',   style({
        backgroundColor: 'rgb(63,81,181)',
        transform: 'scale(1.03)',
        color: '#fff',
        zIndex: 1
      })),
      transition('deselected => selected', animate('100ms ease-in')),
      transition('selected => deselected', animate('100ms ease-out'))
    ]),
    entry
  ],
  styles: [`
    .item-card {
      border-radius: 0;
      position: relative;
      -webkit-transition: background 100ms ease-in-out;
      -moz-transition: background 100ms ease-in-out;
      -ms-transition: background 100ms ease-in-out;
      -o-transition: background 100ms ease-in-out;
      transition: background 100ms ease-in-out;
    }
    .item-card:hover {
      background-color: #dedede;
    }
    .item-card:first-child {
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
    }
    .item-card:last-child {
      border-bottom-left-radius: 2px;
      border-bottom-right-radius: 2px;
    }
    .mdl-card__title, .mdl-card__supporting-text {
      color: inherit;
    }
  `]
})
export class ItemsList {
  @Input() items: Item[];
  @Input() selectedItem: Item;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  itemSelectionStatus(item: Item): string {
    const status = this.selectedItem && this.selectedItem.id === item.id
      ? 'selected' : 'deselected';
    return status;
  }
}
