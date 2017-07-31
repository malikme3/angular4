/**
 * Created by HudaZulifqar on 6/28/2017.
 */

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {PagesConstants} from "../pages.constants.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class MatchesService {
  extra_details;

  constructor(private http: Http, private pagesConstants: PagesConstants) {
  }

  private header = this.pagesConstants.pagesContants.url.header;
  private baseUrl = this.pagesConstants.pagesContants.url.baseUrl;

  private sch_path = 'matches/schedule/?';
  private batting_path = 'detailed/scorecard/batting/?';
  private bowling_path = 'detailed/scorecard/bowling/?';
  private extras_path = 'detailed/scorecard/extras/?';
  private teams_list = '/teams/namue/list';

  private schduel_url = this.baseUrl + this.sch_path;
  private batting_url = this.baseUrl + this.batting_path;
  private bowling_url = this.baseUrl + this.bowling_path;
  private extras_url = this.baseUrl + this.extras_path;
  private teams_url = this.baseUrl + this.teams_list;

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

  getTeamslist(): Observable<any> {
    const url = this.baseUrl + this.teams_list;
    console.info("Call for getTeamList() with url : ", url);
    return this.http.get(this.teams_url, this.header).map(responce => responce.json())
      .catch(this.handleError)
  }

  loadBattingDetails(gameId: string): Observable<any> {
    const url = `${this.batting_url}gameId=${gameId}`;
    console.info("Observable Call for getDetailedScore() with url : ", url);
    return this.http.get(url, this.header).map(res => res.json()).catch(this.handleError);
  }

  loadBowlingDetails(gameId: string): Observable<any> {
    const url = `${this.bowling_url}gameId=${gameId}`;
    console.info("Observable Call for getDetailedScore() with url : ", url);
    return this.http.get(url, this.header).map(res => res.json()).catch(this.handleError);
  }

  loadExtrasDetails(gameId: string): Observable<any> {
    const url = `${this.extras_url}gameId=${gameId}`;
    console.info("Observable Call for getDetailedScore() with url : ", url);
    return this.http.get(url, this.header).map(res => res.json()).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error while fetching date from servier', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

