/* tslint:disable */

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {BasicScorePojo} from './basicScore.pojo';
import {PagesConstants} from "../../../pages.constants.service";
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
  getMatchesResult(seasonId: number): Promise<BasicScorePojo[]> {
    const url = `${this.resultUrl}seasonId=${seasonId}`;
    console.info("The url for getMatchesResult() is", url);
    return this.http.get(url, this.header).toPromise().then(res => res.json() as BasicScorePojo[])
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('Error while date from servier', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
