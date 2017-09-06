import {RouterModule, Routes} from "@angular/router";
import {Statistics} from "./statistics.component";
import {BattingComponent} from "./components/battings/battingComponent";

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Statistics,
    children: [
      {path: 'battingRecords', component: BattingComponent},
      //{ path: 'scheduleView', component: ScheduleComponent },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
