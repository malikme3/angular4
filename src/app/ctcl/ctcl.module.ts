/* tslint:disable */
import { NgModule } from '@angular/core';
import {CtclComponent} from "./ctcl.component";
import {HomeModule} from "./homepage/home.module";
import {CtclRoutingModule} from "./ctcl-routing.module";

const CTCL_COMPONENTS = [
  CtclComponent,
];
@NgModule({
  imports: [
    CtclRoutingModule,
    HomeModule,
  ],
  declarations: [
    ...CTCL_COMPONENTS,
  ]
})
export class CtclModule { }

