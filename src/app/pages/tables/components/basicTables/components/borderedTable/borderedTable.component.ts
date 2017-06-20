/* tslint:disable */
import { Component } from '@angular/core';

import { BasicTablesService } from '../../basicTables.service';
import { PointsTablePojo } from '../../PointsTable.pojo';

@Component({
  selector: 'bordered-table',
  templateUrl: './borderedTable.html',
})
export class BorderedTable {

  metricsTableData: Array<any>;

  constructor(private _basicTablesService: BasicTablesService) {
    this.metricsTableData = _basicTablesService.metricsTableData;
  }
  ngOnInit(): void {
    this.teamPoints = this.team_points();

  }

  teamPoints: PointsTablePojo[];
  team_points(): PointsTablePojo[] {
    this._basicTablesService
      .getTeamPoints()
      .then(res => this.teamPoints = res);
    return this.teamPoints;
  }
}
