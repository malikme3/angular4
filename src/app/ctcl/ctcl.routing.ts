/* tslint:disable */
import {Routes, RouterModule} from '@angular/router';

import {ModuleWithProviders} from '@angular/core';
import {CtclComponent} from "./ctcl.component";
import {HomeComponent} from "./homepage/home.component";

// noinspection TypeScriptValidateTypes
export const routes: Routes = [{

    path: 'clogin',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {path: 'ctclc',
  component: CtclComponent,
  children: [{
    path: 'homepage1',
    component: HomeComponent,
  }],
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

