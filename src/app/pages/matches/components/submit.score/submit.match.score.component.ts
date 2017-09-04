/*/!**
 * Created by HudaZulifqar on 6/27/2017.
 *!/*/

import {Component} from "@angular/core";
import {MatchesService} from "../../matches.service";
import {MatchesConstants} from "../matches.constant.service";
import "rxjs/add/operator/startWith";
import "rxjs/add/operator/map";
import {MatchesDataStoreService} from "../matches-data-store";

@Component({
  selector: 'submit-score',
  // templateUrl: 'newSubmit.html',
  templateUrl: 'submit.match.score.html',
  styleUrls: ['submitScore.scss'],
})
export class SubmitScoreComponent {

//default status
  public isFirstInnings: boolean = true;
  public isBasicDetails: boolean = true;
  public isBatting: boolean = false;
  public isBowling: boolean = false;
  public isExtras: boolean = false;

  public homeTeam: number = null;
  public awayTeam: number = null;
  public matchDate: string = null;
  matchObjectByDate: any;
  matchTeamsDate: any;

  constructor(private matchesService: MatchesService,
              private matchesConstants: MatchesConstants, private matchesDataStoreService: MatchesDataStoreService) {

  }

  ngOnInit(): void {
    this.isBasicDetails = false;
    this.isFirstInnings = false;
    this.isExtras = true;

  }


  onNotify_homeTeam(homeTeam) {
    this.homeTeam = homeTeam.value;
    this.setMatchTeamsDate();
  }

  onNotify_awayTeam(awayTeam) {
    this.awayTeam = awayTeam.value;
    this.setMatchTeamsDate();
  }

  onNotify_date(date: any) {
    this.matchDate = date.formatted;
    this.setMatchTeamsDate();
  }


  setMatchTeamsDate() {
    this.matchTeamsDate = {
      "HomeTeam": this.homeTeam,
      "AwayTeam": this.awayTeam,
      "MatchDate": this.matchDate
    };
    console.info("The MatchTeamDate Obj ++>> ", this.matchTeamsDate)
  }

  //

  onNotify_matchInfo(object) {
    console.info("In Parent: OnNotify, date is ", object);
    console.table(this.homeTeam, this.awayTeam, this.matchDate);
    const match$ = this.matchesService
      .findMatchByPlayingTeamsAndDate(this.homeTeam, this.awayTeam, this.matchDate);
    match$.subscribe
    (res => this.matchObjectByDate = res,
      (err) => console.error('findMatchByPlayingTeamsAndDate: Response Error =>', err),
      () => this.stroreValue());

  };

  stroreValue() {
    console.info("Before Storing Data: ", this.matchObjectByDate)
    this.matchesDataStoreService.setMatchDetails(this.matchObjectByDate);
  }


}
