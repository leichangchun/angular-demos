import {
    trigger,
    state,
    style,
    animate,
    transition,
    keyframes
  } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
    state('in', style({
        opacity: '1',
        transform: 'scale(1)'
    })),
    transition('void => *', [
      animate(200, keyframes([
        style({
            opacity:  '0',
            transform:  'scale(0)',
            offset : 0
        }),
        style({
            opacity:  '1',
            transform:  'scale(1.2)',
            offset : 0.7
        }),
        style({
            opacity:  '1',
            transform:  'scale(1)',
            offset : 1.0
        })
      ]))
    ]),
    transition('* => void', [
      animate(200, keyframes([
        style({
            opacity:  '1',
            transform:  'scale(1)',
            offset : 0
        }),
        style({
            opacity:  '1',
            transform:  'scale(1.2)',
            offset : 0.3
        }),
        style({
            opacity:  '0',
            transform:  'scale(0)',
            offset : 1.0
        })
      ]))
    ])
  ]);
