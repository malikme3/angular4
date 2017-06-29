/**
 * Created by HudaZulifqar on 6/28/2017.
 */

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {PagesConstants} from "../pages.constants.service";

@Injectable()
export class MatchesService {

  private schdUrl = 'matches/schedule/?';  // URL to web api
  constructor(private http: Http, private pagesConstants: PagesConstants) {
  }

  header = this.pagesConstants.pagesContants.url.header;
  baseUrl = this.pagesConstants.pagesContants.url.baseUrl + this.schdUrl;

  // For points table
  getSchedule(seasonId: string): Promise<any> {

    const url = `${this.baseUrl}seasonId=${seasonId}`;
    console.info("Call for getSchedule() is", url);
    return this.http.get(url, this.header).toPromise().then(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error while date from servier', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

