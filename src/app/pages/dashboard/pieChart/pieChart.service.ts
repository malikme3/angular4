import { Injectable } from '@angular/core';
import { BaThemeConfigProvider, colorHelper } from '../../../theme';

@Injectable()
export class PieChartService {

  constructor(private _baConfig: BaThemeConfigProvider) {
  }
  pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
  pieData = [
    {
      color: this.pieColor,
      description: 'dashboard.new_visits',
      stats: '230',
      score: '234',
      battingAve: '39.32',
      strikrRate: '87',
      wickets: '24',
      bowlingAvg: '29',
      icon: 'person',
    }, {
      color: this.pieColor,
      description: 'dashboard.purchases',
      stats: '$ 89,745',
      score: '123',
      battingAve: '39.32',
      strikrRate: '87',
      wickets: '9',
      bowlingAvg: '29',
      icon: 'money',
    }, {
      color: this.pieColor,
      description: 'dashboard.active_users',
      stats: '178,391',
      score: '45',
      battingAve: '39.32',
      strikrRate: '87',
      wickets: '13',
      bowlingAvg: '29',
      icon: 'face',
    }, {
      color: this.pieColor,
      description: 'dashboard.returned',
      stats: '32,592',
      score: '67',
      battingAve: '39.32',
      strikrRate: '87',
      wickets: '23',
      bowlingAvg: '29',
      icon: 'refresh',
    }
  ];

  getData() {
    return this.pieData;
  }
}
