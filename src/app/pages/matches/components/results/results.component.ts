// tslint:disbale
import { Component } from '@angular/core';
import { TreeModel } from 'ng2-tree';
import { ResultsService } from './results.service';
import { BasicScorePojo } from './basicScore.pojo';

@Component({
  selector: 'results-view',
  templateUrl: './results.html',
})

export class ResultsComponent {

  source: BasicScorePojo[];
  source2: BasicScorePojo[];


  constructor(private _resultsService: ResultsService) {
  }
  ngOnInit(): void {
    this.source = this.getBasicResults();

  }

  getBasicResults(): BasicScorePojo[] {
    this._resultsService.getMatchesResult().then(res => this.source = res);
    return this.source;
  }
  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    pager: {
      display: true,
      perPage: 10,
    },
    columns: {
      match_date: {
        title: 'Match Date',
        type: 'string',
      },
      host_team: {
        title: 'Host Team',
        type: 'string',
      },
      guest_team: {
        title: 'Guest Team',
        type: 'string',
      },
      player_first_name: {
        title: 'Man of the Match',
        type: 'string',
      },
      match_status: {
        title: 'Match Status',
        type: 'string',
      },
    },
  };
}
