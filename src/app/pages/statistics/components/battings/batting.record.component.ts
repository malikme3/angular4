import {Component} from "@angular/core";
import {StatisticsService} from "../../statistics.service";
import {StatisticsConstantsService} from "../../statistics.constants.service";
/**
 * Created by HudaZulifqar on 9/5/2017.
 */
@Component({
  selector: 'battings-record',
  templateUrl: './batting.record.html',
  styleUrls: ['../../../matches/components/results/resultTables.scss'],
})

export class BattingRecordComponent {

  battingRecordsList: any;
  data: any;

  constructor(private statisticsService: StatisticsService,
              private  statisticsConstantsService: StatisticsConstantsService) {

  }

  ngOnInit() {
    this.battingRecords();
  }

  settings = this.statisticsConstantsService.battingRecordsTableSettings;

  battingRecords() {
    console.info("Fetching battingRecords list: ")
    const types$ = this.statisticsService.getBattingRecords();
    types$.subscribe(responce => this.battingRecordsList = responce,
      (err) => console.error('battingRecords: Response Error =>', err),
      () => this.loadData());

  }

  loadData() {
    this.data = {
      labels: [this.battingRecordsList[0].playerFullName, this.battingRecordsList[1].playerFullName, this.battingRecordsList[2].playerFullName, this.battingRecordsList[3].playerFullName, this.battingRecordsList[4].playerFullName],
      datasets: [
        {
          label: 'Matches',
          backgroundColor: '#6421f5',
          borderColor: '#1E88E5',
          data: [this.battingRecordsList[0].matches, this.battingRecordsList[1].matches, this.battingRecordsList[2].matches, this.battingRecordsList[3].matches, this.battingRecordsList[4].matches]
        },
        {
          label: 'Total Score',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [this.battingRecordsList[0].runs, this.battingRecordsList[1].runs, this.battingRecordsList[2].runs, this.battingRecordsList[3].runs, this.battingRecordsList[4].runs]
        },
        {
          label: 'Average',
          backgroundColor: '#cc1262',
          borderColor: '#7CB342',
          data: [this.battingRecordsList[0].average, this.battingRecordsList[1].average, this.battingRecordsList[2].average, this.battingRecordsList[3].average, this.battingRecordsList[4].average]
        }
      ]
    }
  }

}
