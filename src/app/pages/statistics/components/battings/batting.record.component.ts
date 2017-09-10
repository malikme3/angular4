import {Component} from "@angular/core";
import {StatisticsService} from "../../statistics.service";
import {StatisticsConstantsService} from "../../statistics.constants.service";
/**
 * Created by HudaZulifqar on 9/5/2017.
 */
@Component({
  selector: 'battings-record',
  templateUrl: './batting.record.html',
  styleUrls: ['./batting.scss'],
})

export class BattingRecordComponent {

  battingRecordsList: any;

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
    types$.subscribe(responce => this.battingRecordsList = responce);
  }

}
