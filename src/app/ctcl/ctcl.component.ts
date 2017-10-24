/* tslint:disable */
import { Component } from '@angular/core';

import { CTCL_MENU_ITEMS } from './ctcl.menu';
import {Routes} from "@angular/router";
import {BaMenuService} from "../theme/services/baMenu/baMenu.service";

@Component({
  selector: 'ctcl',
  templateUrl: `./ctcl.html`
})
export class CtclComponent {

  constructor(private _menuService: BaMenuService, ) {
  }

  ngOnInit() {
   // this._menuService.updateMenuByRoutes(<Routes>CTCL_MENU_ITEMS);
  }
}
