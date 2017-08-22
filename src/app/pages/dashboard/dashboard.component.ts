/* tslint:disable */
import {Component} from '@angular/core';
import {DashboardService} from "./dashboard.service";

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {

  points;
  groups;
  data: any;
  images: any[];
  images_odd: any[];
  //Default year : 2017
  year: String = '2017';

  constructor(private dashboardService: DashboardService) {
    /*
     this.data = {
     datasets: [{
     data: [6, 4, 2, 12],
     backgroundColor: [
     "#FF6384",
     "#7d1ac0",
     "#FFCE56",
     "#22ed19"
     ],
     label: 'My dataset'
     }],
     labels: ['Played', 'Won', 'Lost', 'Total']
     }
     */

  }

  ngOnInit(): void {
    this.points = this.teamsStanding();
    this.groups = this.seasonGroups(this.year);
    this.images = this.dashboardService.getPhoto();
    this.images_odd = this.dashboardService.getPhoto_odd();

  }

  seasonGroups(year: String) {
    console.info("Fetching results for season groups")
    this.dashboardService.getSeasonGroups(year).then(res => this.groups = res);
    return this.groups;
  }

  teamsStanding() {
    console.info("Fetching results for teams standing :")
    this.dashboardService.getTeamStanding().then(res => this.points = res);
    console.info("Point are back from backend", this.points)
    return this.points;
  }

}
