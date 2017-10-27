/* tslint:disable */
import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import {HomeComponent} from "./home.component";
import 'rxjs/Rx';
import 'rxjs/add/operator/takeUntil';
// import 'rxjs/add/operator/toPromise';
import {AccordionModule, CarouselModule, ChartModule, PanelModule} from "primeng/primeng";
import {HomePageService} from "../common/services/homepage.service";
import {CircularComponent} from "./components/circular/circular.component";
import {LatestMatchesComponent} from "./components/latestmatches/latestmatches.component";
import {CommonModule} from "@angular/common";
import {ServicesConstants} from "../common/services/constants.services";
import {ClubsService} from "../common/services/clubs.service";
import {DomHandlerService} from "../common/services/domhandler.service";
import {BestPlayersComponent} from "./components/bestplayers/bestplayers.component";
import {NgaModule} from "../../theme/nga.module";
import {AppTranslationModule} from "../../app.translation.module";
import { routing }       from './homepage.routing';
import {CtclChartComponent} from "./components/ctclchart/polarchart.component";
import {ChartsModule} from "ng2-charts";


@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    AccordionModule,
    PanelModule,
    AppTranslationModule,
    NgaModule,
    RouterModule,
    ChartsModule,
    ChartModule,
    routing
  ],

  declarations: [
    HomeComponent,
    LatestMatchesComponent,
    CircularComponent,
    BestPlayersComponent,
    CtclChartComponent
  ],
  exports: [
    LatestMatchesComponent,
    CircularComponent,
    HomeComponent,
    BestPlayersComponent,
    CtclChartComponent,
  ],
  providers: [
    HomePageService,
    ClubsService,
    DomHandlerService,
    ServicesConstants,
    CtclChartComponent

  ]
})
export class HomeModule {
}
