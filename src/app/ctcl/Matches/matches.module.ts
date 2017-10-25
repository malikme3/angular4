/* tslint:disable */
import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgaModule} from '../../theme/nga.module';
import {AppTranslationModule} from '../../app.translation.module';
import {TreeModule} from 'ng2-tree';
import {HttpModule} from "@angular/http";
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {HotTable, HotTableModule} from 'ng2-handsontable';
import {routing} from './matches.routing';
import {MatchesComponent} from './matches.component';
import {ResultsComponent} from './components/results/results.component';
import {ResultsService} from './components/results/results.service';
import {MatchesConstants} from './components/matches.constant.service';
import {PointsTableComponent} from "./components/points.table/pointstable.component";
import {ScheduleComponent} from "./components/schedule/schedule.component";
import {MatchesService} from "../common/services/matches.service";
import {ScoreComponent} from "./components/detailed.score/score.component";
import {
  MdAutocompleteModule, MdButtonModule, MdCheckboxModule, MdDatepickerModule, MdInputModule, MdNativeDateModule,
  MdRadioModule
} from "@angular/material";
import {SelectModule} from "ng-select";
import {DatePickerModule, DateModel } from "ng2-datepicker";
import {LabelComponent} from "./components/label/labelComponent";
import {NgDateRangePickerModule} from "ng-daterangepicker";
import {MatchesDataStoreService} from "./components/matches-data-store";
import {SubmitScoreComponent} from "./components/submit.score/submit.match.score.component";
import {matchBasicDetailsComponent} from "./components/submit.score/match.basic.details.component/basic.details.component";
import {SubmitScoreBattingComponent} from "./components/submit.score/match.batting/batting.component";
import {SubmitScoreExtrasComponent} from "./components/submit.score/match.extras/extras.component";
import {SubmitScoreTotalsComponent} from "./components/submit.score/match.totals/totals.component";
import {SubmitScoreWicketComponent} from "./components/submit.score/match.wickets/wickets.component";
import {SubmitScoreBowlingComponent} from "./components/submit.score/match.bowling/bowling.component";
import {submitButtonComponent} from "./components/submit.button/submit.button.component";
import {
  DataTableModule, DropdownModule, ProgressBarModule, SharedModule, Slider,
  SplitButtonModule,
  MultiSelect, FieldsetModule,
} from "primeng/primeng";
import {HomePageService} from "../common/services/homepage.service";
import {CtclSharedModule} from "../shared/shared.module";
import {CarouselService} from "../common/services/carousel.service";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    TreeModule,
    routing,
    Ng2SmartTableModule,
    DataTableModule,
    HttpModule,
    HotTableModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdRadioModule,
    MdAutocompleteModule,
    SelectModule,
    ReactiveFormsModule,
    MdDatepickerModule,
    MdNativeDateModule,
    DatePickerModule,
    NgDateRangePickerModule,
    ProgressBarModule,
    SplitButtonModule,
    DropdownModule,
    DataTableModule,
    SharedModule,
    FieldsetModule,
    CtclSharedModule,
    RouterModule
    //SharedModule

  ],
  declarations: [
    MatchesComponent,
    ResultsComponent,
    PointsTableComponent,
    ScheduleComponent,
    ScoreComponent,
    SubmitScoreComponent,
    SubmitScoreBattingComponent,
    LabelComponent,
    //Score cared workd
    matchBasicDetailsComponent,
    SubmitScoreBattingComponent,
    SubmitScoreExtrasComponent,
    SubmitScoreTotalsComponent,
    SubmitScoreWicketComponent,
    SubmitScoreBowlingComponent,
    submitButtonComponent,
    //CricTabMenu,
    Slider,
    MultiSelect,

  ],
  providers: [
    ResultsService, MatchesConstants, HomePageService, MatchesService, MatchesDataStoreService, CarouselService
  ],
})
export class MatchesModule {
}
