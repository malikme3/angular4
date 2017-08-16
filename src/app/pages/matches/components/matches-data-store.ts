import {Injectable} from "@angular/core";
/**
 * Created by HudaZulifqar on 8/15/2017.
 */
@Injectable()
export class MatchesDataStoreService {
  private _matchDetails:any;
  getMatchDetails():any {
    return this._matchDetails;
  }
  setMatchDetails(match:any) {
    console.log("Date Store ==> match details :: ",match)
    this._matchDetails = match;
  }

}
