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
  public email: AbstractControl;
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
  public date;
  //Second Blcok: drop down
  public visitTeam: AbstractControl;
  public homeTeam: AbstractControl;
  public umpireTeam: AbstractControl;
  public winTossTeam: AbstractControl;
  public batFirstTeam: AbstractControl;
  public vitoryTeam: AbstractControl;
  public firstUmpire: AbstractControl;
  public secondUmpire: AbstractControl;
  public manOfMatch: AbstractControl;
  public matchResult: AbstractControl;

  // data responce object
  //private myOptions: any;
  private teamslist: any[];
  public resultList: any[];
  private teamsname;
  myOptions: Array<any>;
  teams_playings: Array<IOption> = [
    {label: 'Select Home Team First', value: 'Home Team'},
    {label: 'Select Guest Team First', value: 'Guest Team'}
  ];

  public submitted: boolean = false;
  //characters: Array<IOption> = this.optionService.getCharacters();
  msg: string = '';

  constructor(fb: FormBuilder, private matchesService: MatchesService, private matchesConstants: MatchesConstants) {

    this.options = new DatePickerOptions();

    this.form = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
      'leagueId': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'season': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'groundId': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'week': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'result': ['', Validators.compose([Validators.required, Validators.minLength(1)])],

      'date': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'visitTeam': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'homeTeam': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'umpireTeam': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'winTossTeam': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'batFirstTeam': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'vitoryTeam': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'firstUmpire': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'secondUmpire': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'manOfMatch': ['', Validators.compose([Validators.required, Validators.minLength(1000000)])],
      'matchResult': ['', Validators.compose([Validators.required, Validators.minLength(1)])],


    });

    this.name = this.form.controls['name'];
    this.email = this.form.controls['email'];
    this.teams = this.form.controls['teams'];
    this.leagueId = this.form.controls['leagueId'];
    this.season = this.form.controls['season'];
    this.groundId = this.form.controls['groundId'];
    this.week = this.form.controls['week'];
    this.result = this.form.controls['league'];

    this.date = this.form.controls['date'];
    this.visitTeam = this.form.controls['visitTeam'];
    this.homeTeam = this.form.controls['homeTeam'];
    this.umpireTeam = this.form.controls['umpireTeam'];
    this.winTossTeam = this.form.controls['winTossTeam'];
    this.batFirstTeam = this.form.controls['batFirstTeam'];
    this.vitoryTeam = this.form.controls['vitoryTeam'];
    this.firstUmpire = this.form.controls['firstUmpire'];
    this.secondUmpire = this.form.controls['secondUmpire'];
    this.manOfMatch = this.form.controls['manOfMatch'];
    this.matchResult = this.form.controls['matchResult'];
  }

  ngOnInit(): void {
    this.getTeamslist();
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
    this.submitted = true;
    console.log("value  ", values)
    if (this.form.valid) {
    }
  }

  getTeamslist() {
    console.info("Fetching results for teams list :")
    const teams$ = this.matchesService.getTeamslist();
    console.log('this.teamsname', this.myOptions)
    teams$.subscribe(responce => this.myOptions = responce,
      () => console.log("responce", this.myOptions));

  }

  // myOptions: Array<IOption> = this.teamsList;

  onSelected(type: any, value: any) {
    console.log('type: ', type, ' value: ', value, 'date: ', this.date.formatted);
    (this.form.controls[type]).setValue(value);
    if (this.date != null && this.form.controls['date'].value != null) {
      (this.form.controls['date']).setValue(this.date.formatted);
    }
  }

  public onSubmit_matchDetails(values: Object): void {
    this.submitted = true;
    console.log("onSubmit_matchDetails:: value  ", values)
  }

  playing_teams(type: any, value: any) {
    console.log('type: ', type, ' value: ', value);
    if (type === 'homeTeam') {
      this.teams_playings[0].label = value;
    }
    if (type === 'guestTeam') {
      this.teams_playings[1].label = value
    }
    console.log('Playing teams are :: ', this.teams_playings)
  }

  onNotify(val: string): void {
    (this.form.controls['league']).setValue(val);
  }


}
