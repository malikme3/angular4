/* tslint:disable */
/**
 * Created by HudaZulifqar on 8/18/2017.
 */
import {Component} from "@angular/core";
import {Player} from "./player";
import {Subject} from "rxjs/Subject";
import {DashboardService} from "../dashboard.service";

@Component({
  selector: 'top-players',
  templateUrl: 'topPlayers.html',
  styleUrls: ['topPlayers.scss'],
})
export class TopPlayersComponent {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  recordsT20: any;
  recordsT30: any;
  recordsObjectT20: any = [];
  recordsObjectT30: any = [];
  recordsDataT20:any = [];
  recordsDataT30:any = [];

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.battingRecordsT20();
    this.battingRecordsT30();
  }

  battingRecordsT20() {
    console.info("Fetching battingRecords list: ")
    const types$ = this.dashboardService.getBattingRecords(31);
    types$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.recordsT20 = responce,
      (err) => console.error('battingRecords: Response Error =>', err),
      () => this.loadDataT20(this.recordsT20));

  }

  battingRecordsT30() {
    console.info("Fetching battingRecords list: ")
    const types$ = this.dashboardService.getBattingRecords(30);
    types$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.recordsT30 = responce,
      (err) => console.error('battingRecords: Response Error =>', err),
      () => this.loadDataT30(this.recordsT30));

  }
  loadDataT20(val) {

    for (let score of val) {
      if (!this.recordsDataT20[9]) {
        this.recordsDataT20.push({
          matches: score.matches,
          runs: score.runs,
          average: score.average,
          fifties: score.fifties,
          name: score.playerFullName
        })
      }
    }
    console.log("recordsDataT20 :", this.recordsDataT20);
    this.recordsObjectT20 = this.recordsDataT20;

  }

  loadDataT30(val) {

  for (let score of val) {
      if (!this.recordsDataT30[9]) {
        this.recordsDataT30.push({
          matches: score.matches,
          runs: score.runs,
          average: score.average,
          fifties: score.fifties,
          name: score.playerFullName
        })
      }
    }
    console.log("recordsDataT30 :", this.recordsDataT30);
    this.recordsObjectT30 = this.recordsDataT30;

  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}

