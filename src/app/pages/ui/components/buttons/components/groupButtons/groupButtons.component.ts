import {Component, Input} from '@angular/core';

@Component({
  selector: 'group-buttons',
  templateUrl: './groupButtons.html',
})
export class GroupButtons {
  @Input() name: String;
  @Input() options;

  constructor() {
  }
}
