import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[ccHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onmouseenter(){
    this.highLight('yellow');
  }

  @HostListener('mouseleave') onmouseleave(){
    this.highLight(null);
  }

  highLight(color: string){
    this.el.nativeElement.style.background = color ;
  }

}
