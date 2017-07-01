import {Component} from '@angular/core';
import {MatchesConstants} from '../matches.constant.service';
import {MatchesService} from "../../matches.service";

@Component({
  selector: 'score-view',
  templateUrl: './score.html',
  styleUrls: ['./score.scss'],
})

export class ScoreComponent {

  batting_data: any[];
  batting_team_first;
  batting_team_second;
  bowling_data: any[];
  bowling_team_first;
  bowling_team_second;


  constructor(private _matchesService: MatchesService, private matchesConstants: MatchesConstants) {
  }

  ngOnInit(): void {
    this.batting_data = this.getBattingDetails('2061');
    this.bowling_data = this.getBowlingDetails('2061');

  }

  getBattingDetails(gameId): any[] {
    console.info("Fetching results for batting details for game id :", gameId)
    this._matchesService.getBattingDetails(gameId).then(res => this.batting_data = res);
    //this.getTitle(this.batting_data);
    return this.batting_data;
  }

  getBowlingDetails(gameId): any[] {
    console.info("Fetching results for batting details for game id :", gameId)
    this._matchesService.getBowlingDetails(gameId).then(res => this.bowling_data = res);
    // this.getTitle(this.bowling_data);
    return this.bowling_data;
  };

/*getTitle(data: any[]) {
  data.forEach((val: any) => {
    if(val.innings_id == 1){
      this.batting_team_first = val.batting_team;
      console.info("Ist Inning Batting first :: ", this.batting_team_first  );
      this.bowling_team_first = val.bowling_team;
      console.info("Ist Inning bowling first :: ", this.bowling_team_first  )
    } else if(val.innings_id == 2)
      this.batting_team_second = val.batting_team;
    console.info("2nd Inning Batting first :: ", this.batting_team_second  )
    this.bowling_team_second = val.bowling_team;
    console.info("2nd Inning bowling first :: ", this.bowling_team_second  )
    });
  };*/
};
