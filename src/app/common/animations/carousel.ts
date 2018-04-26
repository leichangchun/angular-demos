import {
    trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations';

export const carouselState = trigger('carouselState', [
    state('show', style({
        transform: 'translateX(0)'
    })),
    state('left', style({
        transform: 'translateX(-100%)'
    })),
    state('right', style({
        transform: 'translateX(100%)'
    })),
    transition('left <=> show', animate('500ms ease-in')),
    transition('show <=> right', animate('500ms ease-in')),
    transition('left <=> right', animate('0.1ms ease-in'))
  ]);
