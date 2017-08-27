import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DatePickerOptions} from "ng2-datepicker";
import {MatchesDataStoreService} from "../../matches-data-store";
import {MatchesConstants} from "../../matches.constant.service";
import {MatchesService} from "../../../matches.service";
import {IOption} from "ng-select";
import {Component} from "@angular/core";
/**
 * Created by HudaZulifqar on 8/22/2017.
 */

@Component({
  selector: 'score-basic-details',
  templateUrl: 'basic.details.html',
  //styleUrls: ['../../../../theme/components/baCheckbox/baCheckbox.scss'],
  styleUrls: ['../submitScore.scss'],
})
export class matchBasicDetailsComponent {
  options: DatePickerOptions;
  inningsId: number;


  public form: FormGroup;
  // public extrasDetails
  public name: AbstractControl;
  public teams;
  public password: AbstractControl;

  //FIRSR BLOCK
  public league_id: AbstractControl;
  public season: AbstractControl;
  public week: AbstractControl;
  weekNo: number;
  selectedLeague: string;
  public ground_id: AbstractControl;
  public ground_name: AbstractControl;
  public result: AbstractControl;
  public game_date;
  public dateFlag: boolean = true;
  //Second Blcok: drop down
  public awayteam: AbstractControl;
  public hometeam: AbstractControl;
  public umpireTeam: AbstractControl;
  public toss_won_id: AbstractControl;
  public batting_first_id: AbstractControl;
  public batting_second_id: AbstractControl;
  public result_won_id: AbstractControl;
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

  private teamsname;
  myOptions: Array<any>;
  myOptions2: any;
  dateValue: any;
  playersList: Array<any>;
  batFirstPlayers: Array<any>;
  batSecondPlayers: Array<any>;
  playersByTeamsIds: Array<any>;
  playersForHomeTeam: Array<any>;
  playersForAwayTeam: Array<any>;
  playersForUmpiringTeam: Array<any>;
  matchByDate;
  homeTeamsIds: Array<number> = [];
  awayTeamsIds: Array<number> = [];
  umpiringTeamsIds: Array<number> = [];
  teams_playings: Array<IOption> = [
    {label: 'Select Home Team First', value: '0'},
    {label: 'Select Guest Team First', value: '0'}
  ];

  public submitted_step1: boolean = false;
  public submitted_step2: boolean = false;

  public battingForm: FormGroup;
  public battingName: AbstractControl;

  constructor(fb: FormBuilder, private matchesService: MatchesService,
              private matchesConstants: MatchesConstants, private matchesDataStoreService: MatchesDataStoreService) {

    this.options = new DatePickerOptions();

    this.form = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'league_id': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'season': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'ground_id': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'ground_name': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'week': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'result': ['', Validators.compose([Validators.required, Validators.minLength(1)])],

      'game_date': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'awayteam': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'hometeam': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'umpireTeam': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'toss_won_id': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'batting_first_id': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'batting_second_id': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'result_won_id': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
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
    this.league_id = this.form.controls['league_id'];
    this.season = this.form.controls['season'];
    this.ground_id = this.form.controls['ground_id'];
    this.ground_name = this.form.controls['ground_name'];
    this.week = this.form.controls['week'];
    this.result = this.form.controls['result'];

    this.game_date = this.form.controls['game_date'];
    this.awayteam = this.form.controls['awayteam'];
    this.hometeam = this.form.controls['hometeam'];
    this.umpireTeam = this.form.controls['umpireTeam'];
    this.toss_won_id = this.form.controls['toss_won_id'];
    this.batting_first_id = this.form.controls['batting_first_id'];
    this.batting_second_id = this.form.controls['batting_second_id'];
    this.result_won_id = this.form.controls['result_won_id'];
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
    console.warn("dateValue : ", this.dateValue)
    this.myOptions2 = {
      theme: 'green',
      range: 'tm',
      dayNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      presetNames: ['This Month', 'Last Month', 'This Week', 'Last Week', 'This Year', 'Last Year', 'Start', 'End'],
      dateFormat: 'yMd',
      outputFormat: 'MM/DD/YYYY',
      startOfWeek: 1
    };
  }

  //eague_id,season,week,awayteam,hometeam,game_date,result_won_id,forfeit,mom,umpire1,umpire2,maxovers,isactive
  checkLeagues = this.matchesConstants.getLeagues()
  checkVenues = this.matchesConstants.getCheckVenues();
  checkResults = this.matchesConstants.getCheckResults();
  checkStatus = this.matchesConstants.getYesNo();

  public checkboxPropertiesMapping = {
    model: 'checked',
    value: 'name',
    label: 'name',
    baCheckboxClass: 'class'
  };

  getTeamslist() {
    console.info("Fetching results for teams list :")
    const teams$ = this.matchesService.getTeamslist();
    console.log('this.teamsname', this.myOptions)
    teams$.subscribe(responce => this.myOptions = responce,
      () => console.log("responce", this.myOptions));

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


  onSelected(type: any, value: any) {
    console.log('type: ', type, ' value: ', value);
    (this.form.controls[type]).setValue(value);
  }


  onTeamsSelected(type: any, value: any) {
    console.info("onTeamsSelected: Type:", type, 'Value: ', value)
    if (type === 'homeTeamsPortable' || type === 'homeTeam') {
      this.homeTeamsIds.push(value);
      if (type === 'homeTeam') {
        console.info("Fetching Players for Home Teams with => Ids: ", this.homeTeamsIds)
        const teams$ = this.matchesService.getPlayersByTeamsIds(this.homeTeamsIds);
        teams$.subscribe(responce => this.playersForHomeTeam = responce);
      }
    }
    if (type === 'awayTeamsPortable' || type === 'awayTeam') {
      this.awayTeamsIds.push(value);
      if (type === 'awayTeam') {
        console.info("Fetching Players for Away with => Ids: ", this.awayTeamsIds)
        const teams$ = this.matchesService.getPlayersByTeamsIds(this.awayTeamsIds);
        teams$.subscribe(responce => this.playersForAwayTeam = responce);
      }
    }
    if (type === 'umpiringTeam') {
      this.umpiringTeamsIds.push(value);
      console.info("Fetching Players for Umpiring with => Ids: ", this.umpiringTeamsIds)
      const teams$ = this.matchesService.getPlayersByTeamsIds(this.umpiringTeamsIds);
      teams$.subscribe(responce => this.playersForUmpiringTeam = responce);
    }
  }

  battingOrderStatus(teamId) {
    console.log('homeTeam Ids ', this.homeTeamsIds);
    if (this.homeTeamsIds.indexOf(teamId) > -1) {
      console.log("Home Team is Batting First id: ", teamId)
      this.batFirstPlayers = this.playersForHomeTeam;
      this.batSecondPlayers = this.playersForAwayTeam;
    } else {
      console.log("Away Team is Batting First id: ", teamId)
      this.batFirstPlayers = this.playersForAwayTeam;
      this.batSecondPlayers = this.playersForHomeTeam;
    }
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

  matchByPlayingTeamAndDate() {
    let homeTeam = this.form.controls['hometeam'].value;
    let awayTeam = this.form.controls['awayteam'].value;
    let date = this.form.controls['game_date'].value;
    console.log('findMatchByPlayingTeamsAndDate == > hometeam Id', homeTeam, ' awayTeam ', awayTeam, ' date ', date);
    const match$ = this.matchesService.findMatchByPlayingTeamsAndDate(homeTeam, awayTeam, date);
    match$.subscribe(responce => this.matchByDate = responce);
  }

  storeMatchDetails() {
    console.log("The Match Detail for Data Store", this.matchByDate)
    this.matchesDataStoreService.setMatchDetails(this.matchByDate);
  }

  public onSubmitBasicDetails(values: Object): void {
    this.submitted_step1 = true;
    this.inningsId = 1;
    let matchDetailsObject = values;
    if (!this.matchesService.isEmpty(values['game_date'])) {
      let consFormattedDate = values['game_date']['formatted'];
      //Making sure only date value submitting instead whole date object
      matchDetailsObject['game_date'] = consFormattedDate;
    }
    console.log(" ***onSubmitBasicDetails**** HTTP Req Val => ", matchDetailsObject);
    this.matchesService.updateScorecardGameDetails(matchDetailsObject);
  }

  public onSubmit_matchDetails(values: Object): void {
    this.submitted_step1 = true;
    console.log("onSubmit_matchDetails:: value  ", values);
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

  onNotify(val: any): void {
    console.log('this.totalsForm.value frrom total in Parent: ', val)
  }

  onNotify_batting(val: any): void {
    console.log('Batting_parent ==> this.totalsForm.value: ', val)
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
