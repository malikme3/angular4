import {DashboardService} from "../../../dashboard/dashboard.service";
import {Component} from "@angular/core";
/**
 * Created by HudaZulifqar on 6/27/2017.
 */
@Component({
  selector: 'points-table',
  templateUrl: 'pointstable.html',
})
export class PointsTableComponent {

  constructor(private dashboardService: DashboardService) {
  }

  groups;
  // Default Year
  year = '2017';

  ngOnInit(): void {
    this.groups = this.getSeasonGroups();
  }

  getSeasonGroups() {
    console.info('Request for Season groups from point table component');
    this.dashboardService.getSeasonGroups(this.year).then(res => this.groups = res);
    return this.groups;
  }
}
