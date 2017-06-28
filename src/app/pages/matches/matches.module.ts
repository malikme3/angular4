// tslint:disbable
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgaModule} from '../../theme/nga.module';
import {AppTranslationModule} from '../../app.translation.module';
import {TreeModule} from 'ng2-tree';
import {HttpModule} from "@angular/http";
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {DataTableModule} from "angular2-datatable";
import {HotTable, HotTableModule} from 'ng2-handsontable';
import {routing} from './matches.routing';
import {Matches} from './matches.component';
import {ResultsComponent} from './components/results/results.component';
import {TablesModule} from '../tables/tables.module';
import {ResultsService} from './components/results/results.service';
import {MatchesConstants} from './components/matches.constant.service';
import {UiModule} from '../ui/ui.module';
import {PointsTableComponent} from "./components/points.table/pointstable.component";
import {DashboardService} from "../dashboard/dashboard.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    TreeModule,
    TablesModule,
    routing,
    Ng2SmartTableModule,
    DataTableModule,
    HttpModule,
    HotTableModule,
    UiModule,
  ],
  declarations: [
    Matches,
    ResultsComponent,
    PointsTableComponent
  ],
  providers: [
    ResultsService, MatchesConstants, DashboardService
  ],
})
export class MatchesModule {
}
