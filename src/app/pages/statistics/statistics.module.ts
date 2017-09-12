// tslint:disbable
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgaModule} from "../../theme/nga.module";
import {AppTranslationModule} from "../../app.translation.module";
import {TreeModule} from "ng2-tree";
import {HttpModule} from "@angular/http";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {DataTableModule} from "angular2-datatable";
import {HotTableModule} from "ng2-handsontable";
import {FormsInPutModule} from "../forms/forms.module";
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdCheckboxModule,
  MdDatepickerModule,
  MdInputModule,
  MdNativeDateModule,
  MdRadioModule
} from "@angular/material";
import {SelectModule} from "ng-select";
import {DatePickerModule} from "ng2-datepicker";
import {TablesModule} from "../tables/tables.module";
import {UiModule} from "../ui/ui.module";
import {NgDateRangePickerModule} from "ng-daterangepicker";
import {Statistics} from "./statistics.component";
import {routing} from "./statistics.routing";
import {StatisticsService} from "./statistics.service";
import {BattingRecordComponent} from "./components/battings/batting.record.component";
import {StatisticsConstantsService} from "./statistics.constants.service";
import {ChartModule, GrowlModule, MessagesModule, StepsModule, TabMenuModule, TabViewModule} from "primeng/primeng";
import {MessageService} from "./components/shared.message/messageservice";
import {Messages} from "./components/shared.message/messages";


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
    DatePickerModule,
    NgDateRangePickerModule,
    ChartModule,
    TabMenuModule,
    MessagesModule,
    TabViewModule,
    StepsModule,
    GrowlModule,

  ],
  declarations: [
    Statistics,
    BattingRecordComponent,
    Messages,
  ],
  providers: [StatisticsService, StatisticsConstantsService,MessageService,],
})
export class StatisticsModule {
}
