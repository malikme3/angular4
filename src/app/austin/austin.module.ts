/* tslint:disable */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {routing} from './austin.routing';
import {NgaModule} from '../theme/nga.module';
import {AppTranslationModule} from '../app.translation.module';

import {PagesConstants} from "./pages.constants.service";
import {Austin} from "./austin.component";

@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, routing],
  declarations: [Austin],
  providers: [
    PagesConstants
  ]
})
export class AustinModule {
}
