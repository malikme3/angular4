import { Routes, RouterModule } from '@angular/router';

import { Clubs } from './clubs.component';
import { TeamsView } from './components/teamsView/teamsView.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Clubs,
    children: [
      { path: 'teamsview', component: TeamsView }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
