/* tslint:disable */
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {PolarChartComponent} from "app/ctcl/shared/components/charts/polarchart.component";
import {ChartsModule} from "ng2-charts";
import {ChartModule} from "primeng/primeng";


@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    ChartModule
  ],

  declarations: [PolarChartComponent],
  exports: [PolarChartComponent],
  providers: []
})
export class CtclSharedModule {
}
