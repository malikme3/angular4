/* tslint:disable */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgaModule} from '../../theme/nga.module';
import {TreeModule} from 'ng2-tree';

import {routing} from './clubs.routing';
import {
  AccordionModule,
  DataScrollerModule,
  FieldsetModule,
  OrganizationChartModule,
  DataTableModule,
  SharedModule,
  ContextMenuModule
} from "primeng/primeng";
import {TablesModule} from "../../pages/tables/tables.module";
import {ClubsService} from "../common/services/clubs.service";
import {ClubsComponent} from "./clubs.component";
import {ClubsPageComponent} from "./components/clubsHome/clubs.page.component";
import {TeamsViewComponent} from "./components/teamsView/teamsView.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    TreeModule,
    TablesModule,
    OrganizationChartModule,
    FieldsetModule,
    AccordionModule,
    DataTableModule,
    SharedModule,
    ContextMenuModule,
    DataScrollerModule,
    routing
  ],
  declarations: [
    ClubsComponent,
    TeamsViewComponent,
    ClubsPageComponent,
  ],
  exports: [ClubsComponent, ClubsPageComponent],
  providers: [ClubsService],
})
export class ClubsModule {
}
