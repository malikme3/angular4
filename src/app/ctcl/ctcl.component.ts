/* tslint:disable */
import { Component } from '@angular/core';

import { CTCL_MENU_ITEMS } from './ctcl.menu';

@Component({
  selector: 'ctcl',
  templateUrl: `./ctcl.html`
})
export class CtclComponent {
ngOninit(){
  console.log("Ctcl component !");
}
  menu = CTCL_MENU_ITEMS;
}
