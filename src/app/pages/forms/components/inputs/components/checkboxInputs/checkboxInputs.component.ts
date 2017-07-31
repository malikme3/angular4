import {Component} from '@angular/core';

@Component({
  selector: 'checkbox-inputs',
  templateUrl: './checkboxInputs.html',
})
export class CheckboxInputs {
  public checkboxModel = [{
    name: '20 Overs',
    checked: false,
    class: 'col-md-4'
  }, {
    name: '30 Overs',
    checked: true,
    class: 'col-md-4'
  }, {
    name: '35 Overs',
    checked: false,
    class: 'col-md-4'
  }];

  isDisabled: boolean = false;

  public checkboxPropertiesMapping = {
    model: 'checked',
    value: 'name',
    label: 'name',
    baCheckboxClass: 'class'
  };

  constructor() {
  }

}
