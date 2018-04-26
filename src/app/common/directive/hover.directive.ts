import { Directive, ElementRef , Input, HostListener} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(
    private el: ElementRef
  ) {
   }

  @HostListener('mouseenter') onmouseenter() {
    this.el.nativeElement.classList.add('showChild');
  }

  @HostListener('mouseleave') onmouseleave() {
    this.el.nativeElement.classList.remove('showChild');
  }
}
