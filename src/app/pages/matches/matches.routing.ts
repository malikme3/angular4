import { Routes, RouterModule } from '@angular/router';

import { Matches } from './matches.component';
import { Results } from './components/results/results.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Matches,
    children: [
      { path: 'resultsView', component: Results }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
