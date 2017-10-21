/* tslint:disable */
import {NgModule} from '@angular/core';
import {HomeComponent} from "./home.component";
import {AccordionModule, CarouselModule, PanelModule} from "primeng/primeng";
import {HomePageService} from "../common/services/homepage.service";
import {CircularComponent} from "./components/circular/circular.component";
import {LatestMatchesComponent} from "./components/latestmatches/latestmatches.component";
import {CommonModule} from "@angular/common";
import {ServicesConstants} from "../common/services/constants.services";
import {ClubsService} from "../common/services/clubs.service";
import {DomHandlerService} from "../common/services/domhandler";


@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    AccordionModule,
    PanelModule,
  ],

  declarations: [
    HomeComponent,
    LatestMatchesComponent,
    CircularComponent,
  ],
  exports: [
    LatestMatchesComponent,
    CircularComponent,
    HomeComponent
  ],
  providers: [
    HomePageService,
    ClubsService,
    DomHandlerService,
    ServicesConstants

  ]
})
export class HomeModule {
}
