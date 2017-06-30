import {Component} from "@angular/core";
import {MatchesService} from "../../matches.service";
import {MatchesConstants} from "../matches.constant.service";
/**
 * Created by HudaZulifqar on 6/27/2017.
 */
@Component({
  selector: 'matches-schedule',
  templateUrl: 'schedule.html',
  styleUrls: ['../results/resultTables.scss'],
})
export class ScheduleComponent {

  constructor(private matchesService: MatchesService, private  matchesConstants: MatchesConstants) {
  }

  data;
  // Default schedule for all leagues
  leagueType = 'null';
  options2017 = [
    {id: 'null', name: '2017: All Format', year: 2017},
    {id: '31', name: '2017:20 Overs', year: 2017},
    {id: '30', name: '2017:35 Overs', year: 2017}];

  ngOnInit(): void {
    this.data = this.getSeasonGroups(this.leagueType);
  }

  settings = this.matchesConstants.scheduelTable;
  getSeasonGroups(seasonId: string) {
    console.info('Request for league schedules from schedule component');
    this.matchesService.getSchedule(seasonId).then(res => this.data = res);
    return this.data;
  }

  getLeagueSchedule() {
    this.getSeasonGroups(this.leagueType);
  }
}
