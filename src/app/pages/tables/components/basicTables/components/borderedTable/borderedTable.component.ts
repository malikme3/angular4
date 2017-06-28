/* tslint:disable */
import {Component, Input} from '@angular/core';

import { BasicTablesService } from '../../basicTables.service';
import { PointsTablePojo } from '../../PointsTable.pojo';

@Component({
  selector: 'bordered-table',
  templateUrl: './borderedTable.html',
})
export class BorderedTable {
  @Input() points;
  @Input() group;

  metricsTableData: Array<any>;

  constructor(private _basicTablesService: BasicTablesService) {
    this.metricsTableData = _basicTablesService.metricsTableData;
  }
  ngOnInit(): void {
    this.teamPoints = this.team_points(this.group.groupCategory, this.group.seasonName);

  }

  teamPoints: PointsTablePojo[];
  team_points(group: string, season: string): PointsTablePojo[] {
    this._basicTablesService
      .getTeamPoints(group, season)
      .then(res => this.teamPoints = res);
    return this.teamPoints;
  }
}
