/* tslint:disable */

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {BasicScorePojo} from './basicScore.pojo';
import {PagesConstants} from "../../../pages.constants.service";
import {Result} from "../../matches.domain/result";
import {Observable} from "rxjs/Observable";
//import { PointsTablePojo } from './PointsTable.pojo';

@Injectable()
export class ResultsService {

  private url = 'basic/scorecard/?';  // URL to web api
  constructor(private http: Http, private pagesConstants: PagesConstants) {
  }

  header = this.pagesConstants.pagesContants.url.header;
  resultUrl = this.pagesConstants.pagesContants.url.baseUrl + this.url;
  smartTablePageSize = 10;
  // For points table
  getMatchesResult1(seasonId: number): Promise<Result[]> {
    const url = `${this.resultUrl}seasonId=${seasonId}`;
    console.info("The url for getMatchesResult() is", url);
    return this.http.get(url, this.header).toPromise().then(res => res.json() as Result[])
      .catch(this.handleError);

  }

  getMatchesResult(seasonId: number): Observable<Result> {
    const url = `${this.resultUrl}seasonId=${seasonId}`;
    console.info("Call for getMatchesResult() with url : ", url);
    return this.http.get(url, this.header).map(responce => responce.json() as Result[])
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('Error while date from servier', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
