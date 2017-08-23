// tslint:disbable
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import {ScheduleComponent} from "./components/schedule/schedule.component";
import {MatchesService} from "./matches.service";
import {ScoreComponent} from "./components/detailed.score/score.component";
import {SubmitScoreComponent} from "./components/submit.score/submitScore.component";
import {FormsInPutModule} from "../forms/forms.module";
import {
  MdAutocompleteModule, MdButtonModule, MdCheckboxModule, MdDatepickerModule, MdInputModule, MdNativeDateModule,
  MdRadioModule
} from "@angular/material";
import {SelectModule} from "ng-select";
import {DatePickerModule, DateModel } from "ng2-datepicker";
import {SubmitScoreBatting} from "./components/submit.score/submitScoreBatting.component";
import {SubmitScoreWicketComponent} from "./components/submit.score/submit.score.wickets/submitScoreWickets.component";
import {SubmitScoreTotalsComponent} from "./components/submit.score/totals/totals.component";
import {SubmitScoreExtrasComponent} from "./components/submit.score/extras/extras.component";
import {SubmitScoreBattingComponent} from "./components/submit.score/batting/batting.component";
import {MatchesDataStoreService} from "./components/matches-data-store";
import {SubmitScoreBowlingComponent} from "./components/submit.score/bowling/bowling.component";
import {submitScoreComponent_step2} from "./components/submit.score/submitScore_step2/submitScoreComponent_step2";
import {matchBasicDetailsComponent} from "./components/submit.score/submitScore_step3/matchBasicDetails";


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
    FormsInPutModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdRadioModule,
    MdAutocompleteModule,
    SelectModule,
    ReactiveFormsModule,
    MdDatepickerModule,
    MdNativeDateModule,
    DatePickerModule
  ],
  declarations: [
    Matches,
    ResultsComponent,
    PointsTableComponent,
    ScheduleComponent,
    ScoreComponent,
    SubmitScoreComponent,
    SubmitScoreBatting,
    SubmitScoreWicketComponent,
    SubmitScoreTotalsComponent,
    SubmitScoreExtrasComponent,
    matchBasicDetailsComponent,
    SubmitScoreBattingComponent,
    SubmitScoreBowlingComponent,
    submitScoreComponent_step2
  ],
  providers: [
    ResultsService, MatchesConstants, DashboardService, MatchesService, MatchesDataStoreService
  ],
})
export class MatchesModule {
}
