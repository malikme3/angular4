import {Component, HostListener, Input} from '@angular/core';

@Component({
  selector: 'dropdown-buttons',
  templateUrl: './dropdownButtons.html'
})

// TODO: appendToBody does not implemented yet, waiting for it
export class DropdownButtons {
  @Input() name: String;
  @Input() options;

  constructor() {
  }

  buttonType: boolean = false;

}
