/* tslint:disable */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BasicScorePojo } from './basicScore.pojo';
//import { PointsTablePojo } from './PointsTable.pojo';

@Injectable()
export class ResultsService {
    // private headers = new Headers({ 'Content-Type': 'application/json' });
    private headers = new Headers({ 'Access-Control-Allow-Origin': '*.*', 'Content-Type': 'application/x-www-form-urlencoded' });

    private basicScoredUrl = 'https://d63215b7.ngrok.io/ZulfiCricket/basic/scorecard/?seasonId=31';  // URL to web api
    constructor(private http: Http) {
    }

    smartTablePageSize = 10;
    // For points table
    getMatchesResult(): Promise<BasicScorePojo[]> {
        return this.http.get(this.basicScoredUrl, this.headers).toPromise().then(res => res.json() as BasicScorePojo[])
            .catch(this.handleError);

    }

    private handleError(error: any): Promise<any> {
        console.error('Error while date from servier', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
