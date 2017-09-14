/*/!**
 * Created by HudaZulifqar on 6/27/2017.
 *!/*/

import {Component} from "@angular/core";
import {MatchesService} from "../../matches.service";
import {MatchesConstants} from "../matches.constant.service";
import "rxjs/add/operator/startWith";
import "rxjs/add/operator/map";
import {MatchesDataStoreService} from "../matches-data-store";
import {SelectItem} from "primeng/primeng";

@Component({
  selector: 'submit-score',
  // templateUrl: 'newSubmit.html',
  templateUrl: 'submit.match.score.html',
  styleUrls: ['submitScore.scss'],
})
export class SubmitScoreComponent {
  items: any[];
//default status
  public isBasicDetails: boolean = true;
  public isEditScore: boolean = false;
  public isBatting: boolean = false;
  public isBowling: boolean = false;
  public isExtrasSec: boolean = false;

  public homeTeam: number = null;
  public awayTeam: number = null;
  public matchDate: string = null;
  matchObjectByDate: any;
  matchTeamsDate: any;
  editScore: any [];
  scoreEditOpt: SelectItem[];
  selectedEditScoreOpt: any;

  constructor(private matchesService: MatchesService,
              private matchesConstants: MatchesConstants, private matchesDataStoreService: MatchesDataStoreService) {
    this.scoreEditOpt = [];
    this.scoreEditOpt.push({label: 'Basic Details', value: {id: 1, name: 'Basic', code: 'NY'}});
    this.scoreEditOpt.push({label: 'Batting Details', value: {id: 2, name: 'Batting', code: 'RM'}});
    this.scoreEditOpt.push({label: 'Bowling Details', value: {id: 3, name: 'Bowling', code: 'LDN'}});
    this.scoreEditOpt.push({label: 'Extras/Total Details', value: {id: 4, name: 'Extras', code: 'IST'}});
  }

  value: number = 45;

  ngOnInit(): void {
    this.items = [
      {label: 'Match Basic Details', icon: 'fa-list', step: '1'},
      {label: 'Batting Details', icon: 'fa-edit', step: '2'},
      {label: 'Bowling Details', icon: 'fa-futbol-o', step: '3'},
      {label: 'Extras && Total Details', icon: 'fa-bar-chart', step: '4'},
      // {label: 'Edit Existing Score', icon: 'fa-cog'}
    ];

    this.editScore = [
      {
        label: 'File',
        items: [{
          label: 'New',
          icon: 'fa-plus',
          items: [
            {label: 'Project'},
            {label: 'Other'},
          ]
        },
          {label: 'Open'},
          {label: 'Quit'}
        ]
      },
      {
        label: 'Edit',
        icon: 'fa-edit',
        items: [
          {label: 'Undo', icon: 'fa-mail-forward'},
          {label: 'Redo', icon: 'fa-mail-reply'}
        ]
      }
    ];

  }

  selectedEditScore(option) {
    console.log("Selected Score for Edit: ", option)
  }

  menuToggle(val) {
    console.log("Val => ", val)
  }

  onNotify_menuTab(tab) {
    console.log("Selected Score Tab: ", tab)
    this.isEditScore = false;
    this.isBasicDetails = false;
    this.isEditScore = false;
    this.isBatting = false;
    this.isBowling = false;
    this.isExtrasSec = false;

    if (tab.step == "1") {
      this.isBasicDetails = true;
    }
    if (tab.step == "2") {
      this.isBatting = true;
    }
    if (tab.step == "3") {
      this.isBowling = true;
    }
    if (tab.step == "4") {
      this.isExtrasSec = true;
    }

  }

  onNotify_homeTeam(homeTeam) {
    this.homeTeam = homeTeam.value;
    this.setMatchTeamsDate();
  }

  onNotify_awayTeam(awayTeam) {
    this.awayTeam = awayTeam.value;
    this.setMatchTeamsDate();
  }

  onNotify_date(date: any) {
    this.matchDate = date.formatted;
    this.setMatchTeamsDate();
  }


  setMatchTeamsDate() {
    this.matchTeamsDate = {
      "HomeTeam": this.homeTeam,
      "AwayTeam": this.awayTeam,
      "MatchDate": this.matchDate
    };
    console.info("The MatchTeamDate Obj ++>> ", this.matchTeamsDate)
  }

  //

  onNotify_matchInfo(object) {
    console.info("In Parent: OnNotify, date is ", object);
    console.table(this.homeTeam, this.awayTeam, this.matchDate);
    const match$ = this.matchesService
      .findMatchByPlayingTeamsAndDate(this.homeTeam, this.awayTeam, this.matchDate);
    match$.subscribe
    (res => this.matchObjectByDate = res,
      (err) => console.error('findMatchByPlayingTeamsAndDate: Response Error =>', err),
      () => this.stroreValue());

  };

  stroreValue() {
    console.info("Before Storing Data: ", this.matchObjectByDate)
    this.matchesDataStoreService.setMatchDetails(this.matchObjectByDate);
    //Submit Basic match details submitted, hide the basic details and show batting first innings section
    this.isBasicDetails = false;
    this.isBatting = true;
  }

  OnNotify_Batting(value) {
    console.log("Notification Recived from Bat First", value);
    this.isBatting = false;
    this.isExtrasSec = true;
  }

  OnNotify_Extras(comp) {
    console.log("Notification Recived from Extras Sec", comp);
    this.isExtrasSec = false;
    this.isBowling = true;
  }

  OnNotify_Bowling(val) {
    this.isBowling = false;
    //done
  }

  /* checkExtras(value) {

   if (value.component == 'total') {
   this.isExtrasTotal = false;
   this.isExtras = true;
   } else if (value.component == 'extras') {
   this.isExtras = false;
   this.isExtrasWickets = true;
   } else if (value.component == 'wickets') {
   this.isExtrasWickets = false;
   }
   if (!this.isExtras && !this.isExtrasTotal && !this.isExtrasWickets) {
   this.isExtrasSec_1 = false;
   if (value.innings = 'First Innings') {
   this.isBowling_1 = true;
   }
   if (value.innings = 'Second Innings') {
   this.isBowling_2 = true;
   }
   }
   }*/

}
