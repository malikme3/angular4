/* tslint:disable */
import { Injectable } from '@angular/core';
import {PagesConstants} from "../pages.constants.service";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ClubsService {

  constructor(private http: Http, private pagesConstants: PagesConstants) {
  }

  private header = this.pagesConstants.pagesContants.url.header;
  private options = this.pagesConstants.pagesContants.url.options;
  private baseUrl = this.pagesConstants.pagesContants.url.baseUrl;


  private club_list_path = 'clubs/details/';
  private players_roles = 'players/roles/';

  private club_list_path_url = this.baseUrl + this.club_list_path;
  private players_roles_url = this.baseUrl + this.players_roles;

  getClubLists(): Observable<any> {

    console.info("Call for getClubLists() with url : ", this.club_list_path_url);
    return this.http.get(this.club_list_path_url, this.header).map(responce => responce.json())
      .catch(this.handleError)
  }

  getPlayersRoles(): Observable<any> {

    console.info("Call for getPlayerRoles() with url : ", this.club_list_path_url);
    return this.http.get(this.players_roles_url, this.header).map(responce => responce.json())
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('ClubsService: Error while fetching date from server', error);
    return Promise.reject(error.message || error);
  }
}
