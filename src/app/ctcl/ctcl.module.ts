/* tslint:disable */
import { NgModule } from '@angular/core';
import {CtclComponent} from "./ctcl.component";
import {HomeModule} from "./homepage/home.module";
import {CtclRoutingModule} from "./ctcl-routing.module";
import {CtclSharedModule} from "./shared/shared.module";

const CTCL_COMPONENTS = [
  CtclComponent,
];
@NgModule({
  imports: [
    CtclRoutingModule,
    HomeModule,
    CtclSharedModule
  ],
  declarations: [
    ...CTCL_COMPONENTS,
  ]
})
export class CtclModule { }

