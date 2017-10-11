/* tslint:disable */
import { Routes, RouterModule } from '@angular/router';

import { Clubs } from './clubs.component';
import { TeamsView } from './components/teamsView/teamsView.component';
import {ClubsPageComponent} from "./components/clubsHome/clubs.page.component";

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Clubs,
    children: [
      { path: 'teamsview', component: TeamsView },
      { path: 'clubsView', component: ClubsPageComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
