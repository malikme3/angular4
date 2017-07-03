/**
 * Created by HudaZulifqar on 6/28/2017.
 */

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {PagesConstants} from "../pages.constants.service";

@Injectable()
export class MatchesService {


  constructor(private http: Http, private pagesConstants: PagesConstants) {
  }

  private header = this.pagesConstants.pagesContants.url.header;
  private baseUrl = this.pagesConstants.pagesContants.url.baseUrl;

  private sch_path = 'matches/schedule/?';
  private batting_path = 'detailed/scorecard/batting/?';
  private bowling_path = 'detailed/scorecard/bowling/?';

  private schduel_url = this.baseUrl + this.sch_path;
  private batting_url = this.baseUrl + this.batting_path;
  private bowling_url = this.baseUrl + this.bowling_path;

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

  getBowlingDetails(gameId: string): Promise<any> {
    const url = `${this.bowling_url}gameId=${gameId}`;
    console.info("Call for getDetailedScore() with url : ", url);
    return this.http.get(url, this.header).toPromise().then(responce => responce.json())
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('Error while date from servier', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

