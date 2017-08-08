import {Component} from "@angular/core";
import {MatchesService} from "../../matches.service";
import {MatchesConstants} from "../matches.constant.service";
import {NgUploaderOptions} from 'ngx-uploader';
import {FormControl} from "@angular/forms";
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {IOption} from "ng-select";
import {EmailValidator} from "../../../../theme/validators/email.validator";
import {DatePickerOptions} from "ng2-datepicker";
import {Team} from "./Team";

/*/!**
 * Created by HudaZulifqar on 6/27/2017.
 *!/*/
@Component({
  selector: 'submit-score',
  templateUrl: 'newSubmit.html',
  //styleUrls: ['../../../../theme/components/baCheckbox/baCheckbox.scss'],
  styleUrls: ['submitScore.scss'],
})
export class SubmitScoreComponent {

  options: DatePickerOptions;


  public form: FormGroup;
  public name: AbstractControl;
  public teams;
  public password: AbstractControl;
  public repeatPassword: AbstractControl;
  public passwords: FormGroup;

  //FIRSR BLOCK
  public leagueId: AbstractControl;
  public season: AbstractControl;
  public week: AbstractControl;
  weekNo: number;
  selectedLeague: string;
  public groundId: AbstractControl;
  selectedVenue: string;
  public result: AbstractControl;
  selectedResult: string;
  public game_date;
  //Second Blcok: drop down
  public awayteam: AbstractControl;
  public hometeam: AbstractControl;
  public umpireTeam: AbstractControl;
  public tossWonId: AbstractControl;
  public battingFirstId: AbstractControl;
  public battingSecondId: AbstractControl;
  public resultWonId: AbstractControl;
  public umpire1: AbstractControl;
  public umpire2: AbstractControl;
  public mom: AbstractControl;
  public maxovers: AbstractControl;
  public matchResult: AbstractControl;
  //Results options
  public completed: AbstractControl;
  public forfeit: AbstractControl;
  public cancelled: AbstractControl;
  public tied: AbstractControl;
  public cancelledplay: AbstractControl;

  private teamslist: any[];
  public resultList: any[];
  private teamsname;
  myOptions: Array<any>;
  playersList: Array<any>;
  playersByTeamsIds: Array<any>;
  teamsIds: Array<number> = [47, 42];
  teams_playings: Array<IOption> = [
    {label: 'Select Home Team First', value: '0'},
    {label: 'Select Guest Team First', value: '0'}
  ];

  public submitted_step1: boolean = false;
  public submitted_step2: boolean = false;

  public battingForm: FormGroup;
  public battingName: AbstractControl;

  constructor(fb: FormBuilder, private matchesService: MatchesService, private matchesConstants: MatchesConstants) {

    this.options = new DatePickerOptions();

    this.form = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'leagueId': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'season': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'groundId': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'week': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'result': ['', Validators.compose([Validators.required, Validators.minLength(1)])],

      'game_date': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'awayteam': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'hometeam': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'umpireTeam': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'tossWonId': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'battingFirstId': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'battingSecondId': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'resultWonId': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'umpire1': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'umpire2': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'mom': ['', Validators.compose([Validators.required, Validators.minLength(1000000)])],
      'maxovers': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'matchResult': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      //Results options
      'completed': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'forfeit': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'cancelled': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'tied': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'cancelledplay': ['', Validators.compose([Validators.required, Validators.minLength(1)])],


    });

    this.name = this.form.controls['name'];
    this.teams = this.form.controls['teams'];
    this.leagueId = this.form.controls['leagueId'];
    this.season = this.form.controls['season'];
    this.groundId = this.form.controls['groundId'];
    this.week = this.form.controls['week'];
    this.result = this.form.controls['result'];

    this.game_date = this.form.controls['game_date'];
    this.awayteam = this.form.controls['awayteam'];
    this.hometeam = this.form.controls['hometeam'];
    this.umpireTeam = this.form.controls['umpireTeam'];
    this.tossWonId = this.form.controls['tossWonId'];
    this.battingFirstId = this.form.controls['battingFirstId'];
    this.battingSecondId = this.form.controls['battingSecondId'];
    this.resultWonId = this.form.controls['resultWonId'];
    this.umpire1 = this.form.controls['umpire1'];
    this.umpire2 = this.form.controls['umpire2'];
    this.mom = this.form.controls['mom'];
    this.maxovers = this.form.controls['maxovers'];
    this.matchResult = this.form.controls['matchResult'];
    //Results options
    this.completed = this.form.controls['completed'];
    this.forfeit = this.form.controls['forfeit'];
    this.cancelled = this.form.controls['cancelled'];
    this.tied = this.form.controls['tied'];
    this.cancelledplay = this.form.controls['cancelledplay'];

    this.battingForm = fb.group({
      'battingName': ['', Validators.compose([Validators.required, Validators.minLength(4)])],

    });
    this.battingName = this.battingForm.controls['battingName'];

  }

  ngOnInit(): void {
    this.getTeamslist();
    this.getPlayerslist();
    this.playersByIds(this.teamsIds);
  }

  //eague_id,season,week,awayteam,hometeam,game_date,result_won_id,forfeit,mom,umpire1,umpire2,maxovers,isactive
  checkLeagues = this.matchesConstants.getLeagues()
  checkVenues = this.matchesConstants.getCheckVenues();
  checkResults = this.matchesConstants.getCheckResults();

  public checkboxPropertiesMapping = {
    model: 'checked',
    value: 'name',
    label: 'name',
    baCheckboxClass: 'class'
  };

  public onSubmit(values: Object): void {
    this.submitted_step1 = true;
    console.log("In SubmitScore Component --> updateScorecardGameDetails(value): ", values)
    this.matchesService.updateScorecardGameDetails(values);
  }

  getTeamslist() {
    console.info("Fetching results for teams list :")
    const teams$ = this.matchesService.getTeamslist();
    console.log('this.teamsname', this.myOptions)
    teams$.subscribe(responce => this.myOptions = responce,
      () => console.log("responce", this.myOptions));

  }

  getPlayerslist() {
    console.info("Fetching results for Players list :")
    const teams$ = this.matchesService.getPlayerslist();
    console.log('this.playersList', this.playersList)
    teams$.subscribe(responce => this.playersList = responce,
      () => console.log("responce", this.playersList));
    console.info("********** playersList %%%%%%%%%%%", this.playersList)
  }

  playersByIds(teamIds) {
    console.info("******** Fetching results for Players list :")
    const teams$ = this.matchesService.getPlayersByIds(teamIds);
    teams$.subscribe(responce => this.playersByTeamsIds = responce);
  }


  onSelected(type: any, value: any) {
    console.log('type: ', type, ' value: ', value, 'date: ', this.game_date.formatted);
    (this.form.controls[type]).setValue(value);
    if (this.game_date != null) {
      (this.form.controls['game_date']).setValue(this.game_date.formatted);
    }
  }

  onTeamsSelected(type: any, value: any) {
    console.log('onTeamsSelected -> type: ', type, 'onTeamsSelected ->  value: ');

  }

  onSelectedResult(type: any, value: any) {
    console.log('type: ', type, ' value: ', value);
    if (type == 'forfeit') {

      (this.form.controls[type]).setValue(value);
      (this.form.controls['cancelled']).setValue(0);
      (this.form.controls['tied']).setValue(0);
      (this.form.controls['cancelledplay']).setValue(0);

    } else if (type == 'completed') {

      (this.form.controls[type]).setValue(value);
      (this.form.controls['forfeit']).setValue(0);
      (this.form.controls['cancelled']).setValue(0);
      (this.form.controls['tied']).setValue(0);
      (this.form.controls['cancelledplay']).setValue(0);

    } else if (type == 'cancelled') {
      (this.form.controls[type]).setValue(value);
      (this.form.controls['completed']).setValue(0);
      (this.form.controls['forfeit']).setValue(0);
      (this.form.controls['tied']).setValue(0);
      (this.form.controls['cancelledplay']).setValue(0);

    } else if (type == 'tied') {
      (this.form.controls[type]).setValue(value);
      (this.form.controls['completed']).setValue(0);
      (this.form.controls['cancelled']).setValue(0);
      (this.form.controls['forfeit']).setValue(0);
      (this.form.controls['cancelledplay']).setValue(0);

    } else if (type == 'cancelledplay') {
      (this.form.controls[type]).setValue(value);
      (this.form.controls['completed']).setValue(0);
      (this.form.controls['cancelled']).setValue(0);
      (this.form.controls['forfeit']).setValue(0);
      (this.form.controls['tied']).setValue(0);

    }
  }

  public onSubmit_matchDetails(values: Object): void {
    this.submitted_step1 = true;
    console.log("onSubmit_matchDetails:: value  ", values)

    this.matchesService.updateScorecardGameDetails(values);
  }

  playing_teams(type: any, obj: any) {
    console.log('type: ', type, ' obj: ', obj);
    if (type === 'hometeam') {
      this.teams_playings[0].label = obj.label;
      this.teams_playings[0].value = obj.value;
    }
    if (type === 'awayteam') {
      this.teams_playings[1].label = obj.label
      this.teams_playings[1].value = obj.value
    }
    console.log('Playing teams are :: ', this.teams_playings)
  }

  onNotify(val: string): void {
    (this.form.controls['leagueId']).setValue(val);
  }

  player_out_type = this.matchesConstants.getPlayerOutType();
  batting_poistion = this.matchesConstants.getBattingPositions();

  public onSubmit_step2(values: Object): void {
    this.submitted_step2 = true;
    console.log("value  ", values)
    if (this.battingForm.valid) {
    }
  }
}
