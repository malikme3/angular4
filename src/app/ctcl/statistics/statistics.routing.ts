import {RouterModule, Routes} from "@angular/router";
import {Statistics} from "./statistics.component";
import {BattingRecordComponent} from "./components/battings/batting.record.component";

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Statistics,
    children: [
      {path: 'battingRecords', component: BattingRecordComponent},
      //{ path: 'scheduleView', component: ScheduleComponent },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
