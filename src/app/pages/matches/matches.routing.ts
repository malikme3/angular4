import { Routes, RouterModule } from '@angular/router';

import { Matches } from './matches.component';
import { ResultsComponent } from './components/results/results.component';
import {PointsTableComponent} from "./components/points.table/pointstable.component";
import {ScheduleComponent} from "./components/schedule/schedule.component";

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Matches,
    children: [
      { path: 'resultsView', component: ResultsComponent },
      { path: 'scheduleView', component: ScheduleComponent },
      {path: 'pointsTableView', component: PointsTableComponent}
    ]
  }
];

export const routing = RouterModule.forChild(routes);
