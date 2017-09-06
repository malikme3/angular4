/**
 * Created by HudaZulifqar on 6/28/2017.
 */

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {PagesConstants} from "../pages.constants.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class StatisticsService {

  constructor(private http: Http, private pagesConstants: PagesConstants) {
  }

  private header = this.pagesConstants.pagesContants.url.header;
  private options = this.pagesConstants.pagesContants.url.options;
  private baseUrl = this.pagesConstants.pagesContants.url.baseUrl;

  private sch_path = 'matches/schedule/?';
  private batting_path = 'detailed/scorecard/batting/?';

  private score_totals_details = 'updateScorecardTotalDetails';


  private schduel_url = this.baseUrl + this.sch_path;
  private batting_url = this.baseUrl + this.batting_path;

  private score_totals_details_url = this.baseUrl + this.score_totals_details;

  // For points table
  getSchedule(seasonId: string): Promise<any> {

    const url = `${this.schduel_url}seasonId=${seasonId}`;
    console.info("Call for getSchedule() with url : ", url);
    return this.http.get(url, this.header).toPromise().then(res => res.json())
      .catch(this.handleError);
  }

  getBattingDetails(gameId: string): Promise<any> {
    const url = `${this.batting_url}gameId=${gameId}`;
    console.info("Call for getDetailedScore() with url : ", url);
    return this.http.get(url, this.header).toPromise().then(responce => responce.json())
      .catch(this.handleError)
  }


  scorecard_total_details(totalsDetails): Observable<any> {
    console.info("Call for scorecard_total_details() with  url : ", this.score_totals_details_url);
    return this.http.put(this.score_totals_details_url, totalsDetails, this.options).map(responce => responce.json())
      .catch(this.handleError)
  }


  private handleError(error: any): Promise<any> {
    console.error('Error while fetching date from servier', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  isEmpty(val: any): boolean {
    return (val === undefined || val == null || val.length <= 0) ? true : false;
  };


}

