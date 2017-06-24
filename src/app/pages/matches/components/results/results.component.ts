// tslint:disbale
import {Component} from '@angular/core';
import {TreeModel} from 'ng2-tree';
import {ResultsService} from './results.service';
import {BasicScorePojo} from './basicScore.pojo';
import {MatchesConstants} from '../matches.constant.service';

@Component({
  selector: 'results-view',
  templateUrl: './results.html',
})

export class ResultsComponent {

  source: BasicScorePojo[];

  constructor(private _resultsService: ResultsService, private matchesConstants: MatchesConstants) {
  }

  ngOnInit(): void {
    this.source = this.getBasicResults();

  }
  // columns setting for basic score card table
  settings = this.matchesConstants.scoreTableSettings;

  // columns data for basic score card table
  getBasicResults(): BasicScorePojo[] {
    this._resultsService.getMatchesResult().then(res => this.source = res);

    return this.source;
  }

}
