import {Component} from "@angular/core";
import {MatchesConstants} from "../matches.constant.service";
import {MatchesService} from "../../matches.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'score-view',
  templateUrl: './score.html',
  styleUrls: ['./score.scss'],
})

export class ScoreComponent {

  batting_data: any[];
  bowling_data: any[];
  extras_score: any[];
  firstInnings_info: any[];
  queryParamsSub;
  gameId: string;

  constructor(private  router: Router,
              private route: ActivatedRoute,
              private _matchesService: MatchesService,
              private matchesConstants: MatchesConstants,
              private ngUnsubscribe: Subject<void> = new Subject<void>()) {
    this.queryParamsSub = route.queryParams.takeUntil(this.ngUnsubscribe).subscribe(
      params => {
        this.gameId = params['gameId'];
      }
    );
  }

  ngOnInit(): void {
    //this.gameId === '2065' ? this.gameId = '2071' : this.gameId;
    this.getBowlingDetails$(this.gameId);
    this.getBattingDetails$(this.gameId);
    this.getExtrasDetails$(this.gameId);
  }

  getBattingDetails(gameId): any[] {
    console.info("Fetching results for batting details for game id :", gameId)
    this._matchesService.getBattingDetails(gameId).then(res => this.batting_data = res);
    return this.batting_data;
  }

  getBowlingDetails(gameId): any[] {
    console.info("Fetching results for batting details for game id :", gameId)
    this._matchesService.getBowlingDetails(gameId).then(res => this.bowling_data = res);
    return this.bowling_data;
  };

  getBattingDetails$(gameId) {
    const battiing$ = this._matchesService.loadBattingDetails(gameId);
    const firstInnings_info$ = battiing$.map(innings => innings[0]);
    battiing$.takeUntil(this.ngUnsubscribe)
      .subscribe(responce => this.batting_data = responce,
        () => console.log("In Controller: Load Bowling details call completed"));
    firstInnings_info$.takeUntil(this.ngUnsubscribe).subscribe(bat => this.firstInnings_info = bat,
      () => console.log("In Controller: Load Bowling details call completed"));
  }

  getBowlingDetails$(gameId) {
    const bowling$ = this._matchesService.loadBowlingDetails(gameId);
    bowling$.takeUntil(this.ngUnsubscribe)
      .subscribe(responce => this.bowling_data = responce,
        () => console.log("In Controller: Load Bowling details call completed"));
  }

  getExtrasDetails$(gameId) {
    const extras$ = this._matchesService.loadExtrasDetails(gameId);
    extras$.takeUntil(this.ngUnsubscribe)
      .subscribe(responce => this.extras_score = responce,
        () => console.log("In Controller: Load Bowling details call completed"));
  }

  ngOnDestory() {
    this.queryParamsSub.unsubscribe();

    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();

  }

}
