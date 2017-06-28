/**
 * Created by HudaZulifqar on 6/26/2017.
 */
import {Injectable} from "@angular/core";
import {Http} from '@angular/http';

import {PagesConstants} from '../pages.constants.service'

@Injectable()
export class DashboardService {


  private url = 'team/position/?seasonName=2017+20+Overs+League&seasonYear=Group+A';  // URL to web api
  constructor(private http: Http, private  pagesConstant: PagesConstants) {
  }

  header = this.pagesConstant.pagesContants.url.header;
  teamUrl = this.pagesConstant.pagesContants.url.baseUrl + this.url;
  private groupsUrls = this.pagesConstant.pagesContants.url.baseUrl + '/season/groups/?year=';

  getSeasonGroups(year: String): Promise<any[]> {
    console.info('Making request to server for teams standing');
    return this.http.get(this.groupsUrls+year, this.header).toPromise().then(res => res.json()).catch(this.handleError);
  }

  getTeamStanding(): Promise<any[]> {
    console.info('Making request to server for teams standing');
    return this.http.get(this.teamUrl, this.header).toPromise().then(res => res.json())
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('Error while date from servier', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
