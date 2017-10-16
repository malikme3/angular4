/* tslint:disable */
import {DashboardService} from "../dashboard.service";
import {Subject} from "rxjs/Subject";
import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'ctcl-latest-matches',
  templateUrl: 'latestMatches.html',
  styleUrls: ['latestMatches.scss'],
})
export class LatestMatchesSummary {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  private url: string = '/pages/matches/scoreView';
  matchesResult: any;
  diplayScore: any = [];
  displayScoreData: any = [];

  constructor(private router: Router, private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.latestMatchesSummary();
  }

  latestMatchesSummary() {
    console.info("Fetching latestMatchesSummary list: ")
    const types$ = this.dashboardService.getLatestMatchesResult();
    types$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.matchesResult = responce,
      (err) => console.error('matchesResult: Response Error =>', err),
      () => this.loadData1(this.matchesResult));

  }


  loadData1(val) {
    let x = 0;
    let y = 0;
    for (let score of val) {
      if (!this.diplayScore[y]) {
        this.diplayScore[y] = {};
      }
      if (score.innings_id === 1) {
        this.diplayScore[x].team_id_1 = score.team;
        this.diplayScore[x].team_1 = score.team_abbrev;
        this.diplayScore[x].net_score_1 = score.final_score;
        this.diplayScore[x].result = score.result;
        this.diplayScore[x].game_id = score.game_id;
        x++;
      } else if (score.innings_id === 2) {
        this.diplayScore[y].team_id_2 = score.team;
        this.diplayScore[y].team_2 = score.team_abbrev;
        this.diplayScore[y].net_score_2 = score.final_score;
        y++;
      }
    }
    console.log("displayScore: ", this.diplayScore);
    this.displayScoreData = this.diplayScore;
  }

  onClickMatch(value) {
    console.log("Record Event ", value);
    this.getDetailedScore(value.game_id);
  }

  getDetailedScore(gameId) {
    /*const id: string = gameId.data.game_id;*/
    console.info(" *** Sending :: gameId = ***", gameId);
    this.router.navigate([this.url], {queryParams: {gameId: gameId}});
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
