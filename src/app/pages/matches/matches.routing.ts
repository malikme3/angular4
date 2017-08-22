import { Routes, RouterModule } from '@angular/router';

import { Matches } from './matches.component';
import { ResultsComponent } from './components/results/results.component';
import {PointsTableComponent} from "./components/points.table/pointstable.component";
import {ScheduleComponent} from "./components/schedule/schedule.component";
import {ScoreComponent} from "./components/detailed.score/score.component";
import {SubmitScoreComponent} from "./components/submit.score/submitScore.component";
import {SubmitScoreBatting} from "./components/submit.score/submitScoreBatting.component";
import {SubmitScoreBattingComponent} from "./components/submit.score/batting/batting.component";

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Matches,
    children: [
      { path: 'resultsView', component: ResultsComponent },
      { path: 'scheduleView', component: ScheduleComponent },
      {path: 'pointsTableView', component: PointsTableComponent},
      {path: 'scoreView', component: ScoreComponent},
      {path: 'submitScore', component: SubmitScoreComponent},
      {path: 'scoreBattingtFirst', component: SubmitScoreBattingComponent},
      {path: 'submitScoreStep2', component: SubmitScoreBatting}
    ]
  }
];

export const routing = RouterModule.forChild(routes);
