import { Routes, RouterModule } from '@angular/router';

import { MatchesComponent } from './matches.component';
import {ScheduleComponent} from "./components/schedule/schedule.component";
import {PointsTableComponent} from "./components/points.table/pointstable.component";
import {ScoreComponent} from "./components/detailed.score/score.component";
import {SubmitScoreComponent} from "./components/submit.score/submit.match.score.component";
import {ResultsComponent} from "./components/results/results.component";

const routes: Routes = [
  {
    path: '',
    component: MatchesComponent,
    children: [
      { path: 'resultsView', component: ResultsComponent },
      { path: 'scheduleView', component: ScheduleComponent },
      {path: 'pointsTableView', component: PointsTableComponent},
      {path: 'scoreView', component: ScoreComponent},
      {path: 'submitScore', component: SubmitScoreComponent}
      /*{path: 'submitScoreStep2', component: SubmitScoreBatting}*/
    ]
  }
];

export const routing = RouterModule.forChild(routes);
