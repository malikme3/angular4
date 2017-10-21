/* tslint:disable */
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {CtclComponent} from './ctcl.component';
import {HomeComponent} from "./homepage/home.component";

const routes: Routes = [{
  path: '',
  component: CtclComponent,
  children: [{
    path: 'homepage',
    component: HomeComponent,
  },],
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CtclRoutingModule {
}
