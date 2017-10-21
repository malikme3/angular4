/* tslint:disable */
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {PolarChartComponent} from "app/ctcl/shared/components/charts/polarchart/polarchart.component";
import {ChartsModule} from "ng2-charts";
import {ChartModule} from "primeng/primeng";
import {TeamsPointsComponent} from "./components/tables/teamspoints/teamspoints.component";
import {TeamsPointsService} from "../common/services/teamspoints.service";


@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    ChartModule
  ],

  declarations: [PolarChartComponent,TeamsPointsComponent],
  exports: [PolarChartComponent,TeamsPointsComponent],
  providers: [TeamsPointsService]
})
export class CtclSharedModule {
}
