import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class Highlight {

  @Input() appHighlight = 'yellow';

  constructor(private element: ElementRef) {}

@HostListener('mouseenter')
onMouseEnter() {
  console.log('Mouse Enter');
  this.element.nativeElement.style.backgroundColor = 'yellow';
}

@HostListener('mouseleave')
onMouseLeave() {
  console.log('Mouse Leave');
  this.element.nativeElement.style.backgroundColor = '';
}

}