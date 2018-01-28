import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[highlight]',
  host: {
    '(mouseenter)': 'toggle(true)',
    '(mouseleave)': 'toggle(false)'
  }
})

export class Highlight {
  @Input() pos: string;

  constructor(private _el: ElementRef) {}

  toggle(bool) {
    const el = this._el.nativeElement;
    if(bool) {
      el.style.backgroundColor = 'seagreen';
    } else {
      el.style.backgroundColor = 'white';
    }
  }
  // initHighlight() {
  //   const el = this._el.nativeElement;
  //   el.style.backgroundColor = 'seagreen';
  // }

  // undoHighlight() {
  //   const el = this._el.nativeElement;
  //   el.style.backgroundColor = 'white';
  // }
}