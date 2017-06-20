import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { TreeModule } from 'ng2-tree';

import { routing } from './clubs.routing';
import { Clubs } from './clubs.component';
import { TeamsView } from './components/teamsView/teamsView.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    TreeModule,
    routing
  ],
  declarations: [
    Clubs,
    TeamsView,
  ]
})
export class ClubsModule { }
