import {Component, Input} from '@angular/core';

@Component({
  selector: 'ba-card',
  templateUrl: './baCard.html',
})
export class BaCard {
  @Input() title:String;
  @Input() submitVal:String;
  @Input() baCardClass:String;
  @Input() buttonClass:String;
  @Input() cardType:String;
  @Input() isDropDown: boolean;
  @Input() name: String;
  @Input() options;

  options2016 = [
    {id: 20, name: '20 Overs', path: '', year: 2017},
    {id: 30, name: '30 Overs', path: '', year: 2017},
    {id: 35, name: '35 Overs', path: '', year: 2017}];
}
