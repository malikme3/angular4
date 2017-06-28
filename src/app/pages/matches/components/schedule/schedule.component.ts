import {Component} from "@angular/core";
import {MatchesService} from "../../matches.service";
/**
 * Created by HudaZulifqar on 6/27/2017.
 */
@Component({
  selector: 'points-table',
  templateUrl: 'schedule.html',
})
export class ScheduleComponent {

  constructor(private matchesService: MatchesService) {
  }

  groups;

  ngOnInit(): void {
    this.groups = this.getSeasonGroups();
  }

  getSeasonGroups() {
    console.info('Request for Season groups from point table component');
    this.matchesService.getSchedule().then(res => this.groups = res);
    return this.groups;
  }
}
