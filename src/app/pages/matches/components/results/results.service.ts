/* tslint:disable */

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {BasicScorePojo} from './basicScore.pojo';
//import { PointsTablePojo } from './PointsTable.pojo';

@Injectable()
export class ResultsService {
  // private headers = new Headers({ 'Content-Type': 'application/json' });
  private headers = new Headers({
    'Access-Control-Allow-Origin': '*.*',
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  private basicScoredUrl = 'https://a13fbafb.ngrok.io/ZulfiCricket/basic/scorecard/?';  // URL to web api
  constructor(private http: Http) {
  }

  smartTablePageSize = 10;
  // For points table
  getMatchesResult(seasonId: number): Promise<BasicScorePojo[]> {
    const url = `${this.basicScoredUrl}seasonId=${seasonId}`;
    console.info("The url for getMatchesResult() is", url);
    return this.http.get(url, this.headers).toPromise().then(res => res.json() as BasicScorePojo[])
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('Error while date from servier', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
