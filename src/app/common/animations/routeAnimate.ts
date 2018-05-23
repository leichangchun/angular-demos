import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    group
} from '@angular/animations';

export const routeAnimate = trigger('routeAnimate', [
    transition('* => *', [
        query(':leave', style({ transform: 'translateX(0)', position: 'absolute', width : '100%'}), { optional: true }),
        query(':enter', style({ transform: 'translateX(100%)', position: 'absolute', width : '100%'}), { optional: true }),

        group([
          query(':leave', animate('.5s ease-in-out', style({transform: 'translateX(-100%)'})), { optional: true }),
          query(':enter', animate('.5s ease-in-out', style({transform: 'translateX(0)'})), { optional: true })
        ])
      ])
  ]);
