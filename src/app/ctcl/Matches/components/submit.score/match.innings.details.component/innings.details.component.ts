/**
 * Created by HudaZulifqar on 8/22/2017.
 */
import {Component} from "@angular/core";
import {MatchesDataStoreService} from "../../matches-data-store";
import {MatchesConstants} from "../../matches.constant.service";
import {BaMenuService} from "../../../../../theme/services/baMenu/baMenu.service";
import {MatchesService} from "../../../../common/services/matches.service";

@Component({
  selector: 'submit_score_step2',
  templateUrl: 'submitScore_step2.html',
})


export class submitScoreComponent_step2 {
  playersList: Array<any>;
  playersByTeamsIds: Array<any>;

  constructor(private matchesService: MatchesService,
              private matchesConstants: MatchesConstants,
              private matchesDataStoreService: MatchesDataStoreService,
              private _menuService: BaMenuService) {

  }


  getPlayerslist() {
    console.info("Fetching Players list")
    const teams$ = this.matchesService.getPlayerslist();
    teams$.subscribe(responce => this.playersList = responce,
      () => console.log("responce", this.playersList));
  }

  playersListByTeamsIds(teamIds) {
    console.info("Fetching Players list for TeamsIds: ", teamIds)
    const teams$ = this.matchesService.getPlayersByTeamsIds(teamIds);
    teams$.subscribe(responce => this.playersByTeamsIds = responce);
  }
}
