/* tslint:disable */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgaModule} from "../../theme/nga.module";
import {AppTranslationModule} from "../../app.translation.module";
import {TreeModule} from "ng2-tree";
import {HttpModule} from "@angular/http";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {HotTableModule} from "ng2-handsontable";
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
import {NgDateRangePickerModule} from "ng-daterangepicker";
import {
  ChartModule, FieldsetModule, GrowlModule, MessagesModule, SharedModule, StepsModule, TabMenuModule,
  TabViewModule, DataTableModule, AccordionModule, PanelModule, SplitButtonModule,
} from "primeng/primeng";
import {TablesModule} from "../../pages/tables/tables.module";
import {UiModule} from "../../pages/ui/ui.module";
import {FormsInPutModule} from "../../pages/forms/forms.module";
import {PlayersComponent} from "./players.component";
import {PlayerProfileComponent} from "./components/playerprofile.component";
import {routing} from "./players.routing";


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
    FieldsetModule,
    SharedModule,
    AccordionModule,
    PanelModule,
    SplitButtonModule
  ],
  declarations: [
    PlayersComponent,
    PlayerProfileComponent,
  ],
  providers: [],
})
export class PlayersModule {
}
