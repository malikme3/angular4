/* tslint:disable */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { Dashboard } from './dashboard.component';
import { routing } from './dashboard.routing';

import { PopularApp } from './popularApp';
import { PieChart } from './pieChart';
import { TrafficChart } from './trafficChart';
import { UsersMap } from './usersMap';
import { LineChart } from './lineChart';
import { Feed } from './feed';
import { Todo } from './todo';
import { Calendar } from './calendar';
import { CalendarService } from './calendar/calendar.service';
import { FeedService } from './feed/feed.service';
import { LineChartService } from './lineChart/lineChart.service';
import { PieChartService } from './pieChart/pieChart.service';
import { TodoService } from './todo/todo.service';
import { TrafficChartService } from './trafficChart/trafficChart.service';
import { UsersMapService } from './usersMap/usersMap.service';
import { TablesModule } from '../tables/tables.module';
import {DashboardService} from "./dashboard.service";
import {GalleryComponent} from "./cricGallery/gallery";
import {DomHandlerService} from "./cricGallery/domhandler";
import {PlotChartComponent} from "./charts/teamChartComponent";
import {ChartsModule} from "ng2-charts";
import {PlotChartNgComponent} from "./charts/ngchartsComponent";
import {TopPlayersComponent} from "./topPlayers/topPlayers";
import {AccordionModule, CarouselModule, ChartModule, PanelModule} from "primeng/primeng";
import {LatestMatchesSummary} from "./latestMatches/latest.matches.component";
import {CtclCarousel} from "./ctclCarousel/carousel.component";
import {HomeModule} from "../../ctcl/homepage/home.module";
import {CtclSharedModule} from "../../ctcl/shared/shared.module";
import {ClubsService} from "../../ctcl/common/services/clubs.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing,
    TablesModule,
    ChartsModule,
    CarouselModule,
    AccordionModule,
    PanelModule,
    HomeModule,
    CtclSharedModule,
    ChartModule,
  ],
  declarations: [
    PopularApp,
    PieChart,
    TrafficChart,
    UsersMap,
    LineChart,
    Feed,
    Todo,
    Calendar,
    Dashboard,
    GalleryComponent,
    PlotChartComponent,
    PlotChartNgComponent,
    TopPlayersComponent,
    LatestMatchesSummary,
    CtclCarousel,

  ],
  exports: [
    TablesModule
  ],
  providers: [
    CalendarService,
    FeedService,
    LineChartService,
    PieChartService,
    TodoService,
    TrafficChartService,
    UsersMapService,
    DashboardService,
    DomHandlerService,
    ClubsService

  ]
})
export class DashboardModule { }
