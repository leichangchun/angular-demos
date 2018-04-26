import {
    trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations';

export const flyIn = trigger('flyIn', [
    state('in', style({transform: 'translateX(0)'})),
    transition('void => *', [
      style({transform: 'translateX(-100%)'}),
      animate(300)
    ]),
    transition('* => void', [
      style({transform: 'translateX(100%)'}),
      animate(300)
    ])
  ]);
