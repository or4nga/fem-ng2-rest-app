import {trigger, state, style, transition, animate} from '@angular/core';

const styleConfig = {opacity: 0};
const baseStyleConfig = style({
  transform: 'translateX(0)',
  opacity: 1
});

const entry = trigger('entry', [
  state('left', baseStyleConfig),
  state('right', baseStyleConfig),
  transition('void => left', [
    style({opacity: 0, transform: 'translateX(-100%)' }),
    animate('500ms ease-in-out')
  ]),
  transition('void => right', [
    style({opacity: 0, transform: 'translateX(100%)' }),
    animate('500ms ease-in-out')
  ])
]);

export {entry};
