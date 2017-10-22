/* tslint:disable */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { TreeModule } from 'ng2-tree';

import { routing } from './clubs.routing';
import { Clubs } from './clubs.component';
import { TeamsView } from './components/teamsView/teamsView.component';
import { TablesModule } from '../tables/tables.module';
import {ClubsService} from "./clubs.service";
import {ClubsPageComponent} from "app/pages/clubs/components/clubsHome/clubs.page.component";
import {AccordionModule, DataScrollerModule, FieldsetModule, OrganizationChartModule} from "primeng/primeng";

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
    DataScrollerModule,
    routing
  ],
  declarations: [
    Clubs,
    TeamsView,
    ClubsPageComponent
  ],
  export: [ClubsPageComponent],
  providers: [ClubsService],
})
export class ClubsModule { }
