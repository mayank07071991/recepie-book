import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') get opened() {
    return this.isOpen;
  }
  private isOpen = false;
  @HostListener('click') open() {
    this.isOpen = true;
  }

  @HostListener('mouseleave') close() {

    this.isOpen = false;
  }

}
