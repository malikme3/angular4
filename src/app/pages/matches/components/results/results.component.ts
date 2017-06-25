// tslint:disbale
import {Component} from '@angular/core';
import {TreeModel} from 'ng2-tree';
import {ResultsService} from './results.service';
import {BasicScorePojo} from './basicScore.pojo';
import {MatchesConstants} from '../matches.constant.service';

@Component({
  selector: 'results-view',
  templateUrl: './results.html',
  styleUrls: ['./resultTables.scss'],
})

export class ResultsComponent {

  source: BasicScorePojo[];

  constructor(private _resultsService: ResultsService, private matchesConstants: MatchesConstants) {
  }

  ngOnInit(): void {
    this.source = this.getBasicResults(30);

  }

  // columns setting for basic score card table
  settings = this.matchesConstants.scoreTableSettings;
  isDropDown = true;
  title = 'Basic Score Card';
  /* 35 overs- Defualt league result display*/
  leagueType:number = 30;


  options = [
    {id: 20, name: '20 Overs Leagues', path: '', year: 2017},
    {id: 30, name: '30 Overs Leagues', path: '', year: 2017},
    {id: 35, name: '35 Overs Leagues', path: '', year: 2017},
    {id: 20, name: '20 Overs Leagues', path: '', year: 2016},
    {id: 30, name: '30 Overs Leagues', path: '', year: 2016},
    {id: 35, name: '35 Overs Leagues', path: '', year: 2016},
    {id: 20, name: '20 Overs Leagues', path: '', year: 2015},
    {id: 30, name: '30 Overs Leagues', path: '', year: 2015},
    {id: 35, name: '35 Overs Leagues', path: '', year: 2015}
  ];
  options2017 = [
    {id: 31, name: '20 Overs', path: '', year: 2017},
    {id: 30, name: '35 Overs', path: '', year: 2017}];


  // columns data for basic score card table
  getBasicResults(seasonId): BasicScorePojo[] {
    console.info("Fetching result for league for id :", seasonId)
    this._resultsService.getMatchesResult(seasonId).then(res => this.source = res);
    return this.source;
  }

  getLeagueResults(){
    this.getBasicResults(this.leagueType);
  }

}
