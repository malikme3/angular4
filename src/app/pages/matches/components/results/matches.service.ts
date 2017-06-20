/* tslint:disable */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { PointsTablePojo } from './PointsTable.pojo';

@Injectable()
export class ResultsService {
    // private headers = new Headers({ 'Content-Type': 'application/json' });
    private headers = new Headers({ 'Access-Control-Allow-Origin': '*.*', 'Content-Type': 'application/x-www-form-urlencoded' });

    private heroesUrl = 'https://d63215b7.ngrok.io/ZulfiCricket/team/position/?seasonName=2017+20+Overs+League&seasonYear=Group+A';  // URL to web api
    constructor(private http: Http) {
    }

    smartTablePageSize = 10;
    // For points table
    getTeamPoints(): Promise<PointsTablePojo[]> {
        return this.http.get(this.heroesUrl, this.headers).toPromise().then(res => res.json() as PointsTablePojo[])
            .catch(this.handleError);

    }

    private handleError(error: any): Promise<any> {
        console.error('Error while date from servier', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
