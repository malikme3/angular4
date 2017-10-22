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
  {path: 'ctcl',
  component: CtclComponent,
  children: [{
    path: '',
    component: HomeComponent,
  }],
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

