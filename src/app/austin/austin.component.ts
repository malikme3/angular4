/* tslint:disable */
import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { BaMenuService } from '../theme';
import { AUSTIN_MENU } from './austin.menu';

@Component({
  selector: 'austin',
  templateUrl: `./austin.html`
})
export class Austin {

  constructor(private _menuService: BaMenuService, ) {
    console.log("Austin Office");
  }

  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>AUSTIN_MENU);
  }
}
