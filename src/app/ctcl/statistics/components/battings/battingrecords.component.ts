/* tslint:disable */
import {Component} from "@angular/core";
import {MenuItem, Message} from "primeng/primeng";
import {MessageService} from '../shared.message/messageservice';
import {Subject} from 'rxjs/Subject';
import {StatisticsConstantsService} from "../../../common/services/statistics.constants.service";
import {StatisticsService} from "../../../common/services/statistics.service";
import {BattinginputsPojo} from "../../../common/domain/battinginputs.pojo";
import {forEach} from "@angular/router/src/utils/collection";

/**
 * Created by HudaZulifqar on 9/5/2017.
 */
@Component({
  selector: 'ctcl-battings-records',
  templateUrl: './battingrecords.component.html',
  styleUrls: ['battingrecords.component.scss'],
  providers: [MessageService],
})

export class BattingRecordComponent {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  previousFiveYear: any;
  previousFiveYearsRecords: any[] = [];
  t20Records: any[] = [];
  t35Records: any[] = [];
  battingRecordsList: any;
  data: any;
  msgs: Message[] = [];
  items: MenuItem[];
  itemsSteps: MenuItem[];

  //setting default values
  battingRecordInputs: BattinginputsPojo =
    {
      playerId: null,
      teamId: null,
      clubId: null,
      seasonId: null,
      seasonYear: null,
    };

  constructor(private statisticsService: StatisticsService,
              private  statisticsConstantsService: StatisticsConstantsService,
              private messageService: MessageService) {

  }

  ngOnInit() {

    var d = new Date().getFullYear();
    //previous 5 years
    this.previousFiveYear = (d - 5);
    console.log("Previous 5 Years: ", this.previousFiveYear);

    this.itemsSteps = [
      {label: 'Step 1'},
      {label: 'Step 2'},
      {label: 'Step 3'}
    ];
    this.items = [
      {label: 'Statistics', icon: 'fa-bar-chart'},
      {label: 'Team', icon: 'fa-calendar'},
      {label: 'Club', icon: 'fa-book'},
      {label: 'League', icon: 'fa-support'},
      {label: 'All-Round', icon: 'fa-twitter'}
    ];

    this.battingRecords(this.battingRecordInputs);
  }

  onTabChange(event) {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Tab Expanded', detail: 'Index: ' + event.index});
  }

  settings = this.statisticsConstantsService.battingRecordsTableSettings;

  battingRecords(inputs) {
    console.info("Fetching battingRecords list: ");
    const types$ = this.statisticsService.getBattingRecords(inputs);

    types$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.battingRecordsList = responce,
      (err) => console.error('battingRecords: Response Error =>', err),
      () => this.loadData(this.battingRecordsList));
  }

  loadData(records) {
    console.log("request is completed");
    for (let record of records) {
      if (record.season_year >= this.previousFiveYear) {
        this.previousFiveYearsRecords.push(record);
      }
    }
    for (let record of records) {
      if (record.season_id === 31) {
        this.t20Records.push(record);
      } else if(record.season_id === 30) {
        this.t35Records.push(record);
      }
    }
  }

  showViaService() {
    this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Via MessageService'});
  }

  clear() {
    this.msgs = [];
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
