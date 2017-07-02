import {Component} from '@angular/core';
import {MatchesConstants} from '../matches.constant.service';
import {MatchesService} from "../../matches.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'score-view',
  templateUrl: './score.html',
  styleUrls: ['./score.scss'],
})

export class ScoreComponent {

  batting_data: any[];
  bowling_data: any[];
  queryParamsSub;
  gameId: String;

  constructor(private  router: Router, private route: ActivatedRoute, private _matchesService: MatchesService, private matchesConstants: MatchesConstants) {
    this.queryParamsSub = route.queryParams.subscribe(
      params => {
        this.gameId = params['gameId'];
      }
    );

  }

  ngOnInit(): void {
    this.gameId === '2065' ? this.gameId === '2071' : this.gameId;
    this.batting_data = this.getBattingDetails(this.gameId);
    this.bowling_data = this.getBowlingDetails(this.gameId);
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

  ngOnDestory() {
    this.queryParamsSub.unsubscribe();
  }

}
