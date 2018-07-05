import { Input , Directive , ElementRef , ComponentRef , ViewContainerRef , Renderer2 , ComponentFactoryResolver , ComponentFactory, HostListener} from '@angular/core';
import { HovertipComponent } from './hovertip.component';
@Directive({
  selector: '[appHovertip]'
})
export class HovertipDirective {

  public hovertip: ComponentRef<HovertipComponent>;
  public factory: ComponentFactory<HovertipComponent>;
  constructor(
    private elementRef: ElementRef,
    private viewContainer: ViewContainerRef,
    private render: Renderer2,
    private resolver: ComponentFactoryResolver
  ) {
     this.factory = this.resolver.resolveComponentFactory(HovertipComponent);
   }

   @Input('appHovertip') tipText: string;

   @HostListener('mouseenter') onmouseenter() {
    this.viewContainer.clear();
    this.hovertip = this.viewContainer.createComponent(this.factory);
    this.hovertip.instance.tipText = this.tipText;
  }

  @HostListener('mouseleave') onmouseleave() {
    if (this.hovertip) {
      this.hovertip.destroy();
    }
  }

}
