/* tslint:disable */
import {Routes, RouterModule} from '@angular/router';

import {ModuleWithProviders} from '@angular/core';
import {CtclComponent} from "./ctcl.component";
import {HomeComponent} from "./homepage/home.component";

// noinspection TypeScriptValidateTypes

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule'
  },
  {
    path: 'ctcl',
    component: CtclComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'clubs', loadChildren: '../ctcl/clubs/clubs.module#ClubsModule'}
    ]
  }
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);

