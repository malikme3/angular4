/* tslint:disable */
import { NgModule } from '@angular/core';
import {CtclComponent} from "./ctcl.component";
import {HomeModule} from "./homepage/home.module";
import {CtclSharedModule} from "./shared/shared.module";
import {routing} from "./ctcl.routing";
import 'rxjs/add/operator/toPromise';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AppTranslationModule} from "../app.translation.module";
import {NgaModule} from "../theme/nga.module";

const CTCL_COMPONENTS = [
  CtclComponent,
];
@NgModule({
  imports: [
    HomeModule,
    CommonModule,
    FormsModule,
    CtclSharedModule,
    AppTranslationModule, NgaModule,
    routing
  ],
  declarations: [
    ...CTCL_COMPONENTS,
  ]
})
export class CtclModule { }

