import {Component} from "@angular/core";
import {MatchesService} from "../../matches.service";
import {MatchesConstants} from "../matches.constant.service";
/**
 * Created by HudaZulifqar on 6/27/2017.
 */
@Component({
  selector: 'matches-schedule',
  templateUrl: 'schedule.html',
})
export class ScheduleComponent {

  constructor(private matchesService: MatchesService, private  matchesConstants: MatchesConstants) {
  }

  data;

  options2017 = [
    {id: 31, name: '20 Overs', path: '', year: 2017},
    {id: 30, name: '35 Overs', path: '', year: 2017}];
// Default schedule for all leagues
  default_schedule: string = null;
  ngOnInit(): void {
    this.data = this.getSeasonGroups(this.default_schedule);
  }

  settings = this.matchesConstants.scheduelTable;


  getSeasonGroups(seasonId: string) {
    console.info('Request for matches schedules from schedule component');
    this.matchesService.getSchedule(seasonId).then(res => this.data = res);
    return this.data;
  }


}
