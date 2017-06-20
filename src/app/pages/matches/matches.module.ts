// tslint:disbable
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { TreeModule } from 'ng2-tree';
import { HttpModule } from "@angular/http";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule } from "angular2-datatable";
import { HotTable, HotTableModule } from 'ng2-handsontable';
import { routing } from './matches.routing';
import { Matches } from './matches.component';
import { Results } from './components/results/results.component';
import { TablesModule } from '../tables/tables.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    TreeModule,
    TablesModule,
    routing,
    Ng2SmartTableModule,
    DataTableModule,
    HttpModule,
    HotTableModule
  ],
  declarations: [
    Matches,
    Results,
  ]
})
export class MatchesModule { }
