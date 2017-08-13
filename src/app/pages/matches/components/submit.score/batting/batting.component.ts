import {Component, EventEmitter, Input, Output} from "@angular/core";
import {MatchesService} from "../../../matches.service";
import {MatchesConstants} from "../../matches.constant.service";
import {NgUploaderOptions} from 'ngx-uploader';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
/*/!**
 * Created by HudaZulifqar on 6/27/2017.
 *!/*/
@Component({
  selector: 'submit-score-batting',
  templateUrl: 'batting.html',
  //styleUrls: ['../../../../theme/components/baCheckbox/baCheckbox.scss'],
  styleUrls: ['../submitScore.scss'],
})
export class SubmitScoreBattingComponent {
  @Output() notify: EventEmitter<any> = new EventEmitter<any>();
  @Input() batFirstPlayers: Array<any>;
  playersList;
  player_out_type;

  form: FormGroup;
  public name: AbstractControl;

//Batsman # 1
  battingInf_1: FormGroup;
  public batsmanId_1: AbstractControl;
  public outTypeId_1: AbstractControl;
  public fielder_1: AbstractControl;
  public bowler_1: AbstractControl;
  public runs_1: AbstractControl;
  public balls_1: AbstractControl;
  public fours_1: AbstractControl;
  public sixes_1: AbstractControl;

  //Batsman # 2
  battingInf_2: FormGroup;
  public batsmanId_2: AbstractControl;
  public outTypeId_2: AbstractControl;
  public fielder_2: AbstractControl;
  public bowler_2: AbstractControl;
  public runs_2: AbstractControl;
  public balls_2: AbstractControl;
  public fours_2: AbstractControl;
  public sixes_2: AbstractControl;

  //Batsman # 3
  battingInf_3: FormGroup;
  public batsmanId_3: AbstractControl;
  public outTypeId_3: AbstractControl;
  public fielder_3: AbstractControl;
  public bowler_3: AbstractControl;
  public runs_3: AbstractControl;
  public balls_3: AbstractControl;
  public fours_3: AbstractControl;
  public sixes_3: AbstractControl;

  //Batsman # 4
  battingInf_4: FormGroup;
  public outTypeId_4: AbstractControl;
  public batsmanId_4: AbstractControl;
  public fielder_4: AbstractControl;
  public bowler_4: AbstractControl;
  public runs_4: AbstractControl;
  public balls_4: AbstractControl;
  public fours_4: AbstractControl;
  public sixes_4: AbstractControl;

  //Batsman # 5
  battingInf_5: FormGroup;
  public batsmanId_5: AbstractControl;
  public outTypeId_5: AbstractControl;
  public fielder_5: AbstractControl;
  public bowler_5: AbstractControl;
  public runs_5: AbstractControl;
  public balls_5: AbstractControl;
  public fours_5: AbstractControl;
  public sixes_5: AbstractControl;

  //Batsman # 6
  battingInf_6: FormGroup;
  public batsmanId_6: AbstractControl;
  public outTypeId_6: AbstractControl;
  public fielder_6: AbstractControl;
  public bowler_6: AbstractControl;
  public runs_6: AbstractControl;
  public balls_6: AbstractControl;
  public fours_6: AbstractControl;
  public sixes_6: AbstractControl;

  //Batsman # 7
  battingInf_7: FormGroup;
  public batsmanId_7: AbstractControl;
  public outTypeId_7: AbstractControl;
  public fielder_7: AbstractControl;
  public bowler_7: AbstractControl;
  public runs_7: AbstractControl;
  public balls_7: AbstractControl;
  public fours_7: AbstractControl;
  public sixes_7: AbstractControl;

  //Batsman # 8
  battingInf_8: FormGroup;
  public batsmanId_8: AbstractControl;
  public outTypeId_8: AbstractControl;
  public fielder_8: AbstractControl;
  public bowler_8: AbstractControl;
  public runs_8: AbstractControl;
  public balls_8: AbstractControl;
  public fours_8: AbstractControl;
  public sixes_8: AbstractControl;

  //Batsman # 9
  battingInf_9: FormGroup;
  public batsmanId_9: AbstractControl;
  public outTypeId_9: AbstractControl;
  public fielder_9: AbstractControl;
  public bowler_9: AbstractControl;
  public runs_9: AbstractControl;
  public balls_9: AbstractControl;
  public fours_9: AbstractControl;
  public sixes_9: AbstractControl;

  //Batsman # 10
  battingInf_10: FormGroup;
  public batsmanId_10: AbstractControl;
  public outTypeId_10: AbstractControl;
  public fielder_10: AbstractControl;
  public bowler_10: AbstractControl;
  public runs_10: AbstractControl;
  public balls_10: AbstractControl;
  public fours_10: AbstractControl;
  public sixes_10: AbstractControl;

  //Batsman # 11
  battingInf_11: FormGroup;
  public batsmanId_11: AbstractControl;
  public outTypeId_11: AbstractControl;
  public fielder_11: AbstractControl;
  public bowler_11: AbstractControl;
  public runs_11: AbstractControl;
  public balls_11: AbstractControl;
  public fours_11: AbstractControl;
  public sixes_11: AbstractControl;


  constructor(fb: FormBuilder, private matchesService: MatchesService, private matchesConstants: MatchesConstants) {
    this.form = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'battingInf_1': fb.group({
        'batsmanId_1': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'outTypeId_1': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'fielder_1': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'bowler_1': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'runs_1': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'balls_1': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'fours_1': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'sixes_1': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      }),
      'battingInf_2': fb.group({
        'batsmanId_2': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'outTypeId_2': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'fielder_2': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'bowler_2': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'runs_2': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'balls_2': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'fours_2': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'sixes_2': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      }),
      'battingInf_3': fb.group({
        'batsmanId_3': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'outTypeId_3': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'fielder_3': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'bowler_3': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'runs_3': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'balls_3': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'fours_3': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'sixes_3': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      }),
      'battingInf_4': fb.group({
        'batsmanId_4': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'outTypeId_4': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'fielder_4': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'bowler_4': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'runs_4': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'balls_4': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'fours_4': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'sixes_4': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      }),
      'battingInf_5': fb.group({
        'batsmanId_5': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'outTypeId_5': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'fielder_5': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'bowler_5': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'runs_5': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'fours_5': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'sixes_5': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      }),
      'battingInf_6': fb.group({
        'batsmanId_6': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'outTypeId_6': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'fielder_6': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'bowler_6': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'runs_6': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'balls_6': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'fours_6': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'sixes_6': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      }),
      'battingInf_7': fb.group({
        'batsmanId_11': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'batsmanId_7': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'outTypeId_7': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'fielder_7': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'bowler_7': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'runs_7': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'balls_7': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'fours_7': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'sixes_7': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      }),
      'battingInf_8': fb.group({
        'batsmanId_8': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'outTypeId_8': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'fielder_8': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'bowler_8': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'runs_8': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'balls_8': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'fours_8': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'sixes_8': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      }),
      'battingInf_9': fb.group({
        'batsmanId_9': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'outTypeId_9': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'fielder_9': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'bowler_9': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'runs_9': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'balls_9': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'fours_9': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'sixes_9': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      }),
      'battingInf_10': fb.group({
        'batsmanId_10': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'outTypeId_10': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'fielder_10': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'bowler_10': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'runs_10': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'balls_10': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'fours_10': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'sixes_10': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      }),
      'battingInf_11': fb.group({
        'batsmanId_11': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'outTypeId_11': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'fielder_11': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'bowler_11': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'runs_11': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'balls_11': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'fours_11': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'sixes_11': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      })
    });

    this.name = this.form.controls['name'];

    //Batting Position # 1
    this.battingInf_1 = <FormGroup> this.form.controls['battingInf_1'];
    this.batsmanId_1 = this.battingInf_1.controls['batsmanId_1'];
    this.outTypeId_1 = this.battingInf_1.controls['outTypeId_1'];
    this.fielder_1 = this.battingInf_1.controls['fielder_1'];
    this.bowler_1 = this.battingInf_1.controls['bowler_1'];
    this.runs_1 = this.battingInf_1.controls['runs_1'];
    this.balls_1 = this.battingInf_1.controls['balls_1'];
    this.fours_1 = this.battingInf_1.controls['fours_1'];
    this.sixes_1 = this.battingInf_1.controls['sixes_1'];

    //Batting Position # 2
    this.battingInf_2 = <FormGroup> this.form.controls['battingInf_2'];
    this.batsmanId_2 = this.battingInf_1.controls['batsmanId_2'];
    this.outTypeId_2 = this.battingInf_2.controls['outTypeId_2'];
    this.fielder_2 = this.battingInf_2.controls['fielder_2'];
    this.bowler_2 = this.battingInf_2.controls['bowler_2'];
    this.runs_2 = this.battingInf_2.controls['runs_2'];
    this.balls_2 = this.battingInf_2.controls['balls_2'];
    this.fours_2 = this.battingInf_2.controls['fours_2'];
    this.sixes_2 = this.battingInf_2.controls['sixes_2'];

    //Batting Position # 3
    this.battingInf_3 = <FormGroup> this.form.controls['battingInf_3'];
    this.batsmanId_3 = this.battingInf_1.controls['batsmanId_3'];
    this.outTypeId_3 = this.battingInf_3.controls['outTypeId_3'];
    this.fielder_3 = this.battingInf_3.controls['fielder_3'];
    this.bowler_3 = this.battingInf_3.controls['bowler_3'];
    this.runs_3 = this.battingInf_3.controls['runs_3'];
    this.balls_3 = this.battingInf_3.controls['balls_3'];
    this.fours_3 = this.battingInf_3.controls['fours_3'];
    this.sixes_3 = this.battingInf_3.controls['sixes_3'];

    //Batting Position # 4
    this.battingInf_4 = <FormGroup> this.form.controls['battingInf_4'];
    this.batsmanId_4 = this.battingInf_1.controls['batsmanId_4'];
    this.outTypeId_4 = this.battingInf_4.controls['outTypeId_4'];
    this.fielder_4 = this.battingInf_4.controls['fielder_4'];
    this.bowler_4 = this.battingInf_4.controls['bowler_4'];
    this.runs_4 = this.battingInf_4.controls['runs_4'];
    this.balls_4 = this.battingInf_4.controls['balls_4'];
    this.fours_4 = this.battingInf_4.controls['fours_4'];
    this.sixes_4 = this.battingInf_4.controls['sixes_4'];

    //Batting Position # 5
    this.battingInf_5 = <FormGroup> this.form.controls['battingInf_5'];
    this.batsmanId_5 = this.battingInf_1.controls['batsmanId_5'];
    this.outTypeId_5 = this.battingInf_5.controls['outTypeId_5'];
    this.fielder_5 = this.battingInf_5.controls['fielder_5'];
    this.bowler_5 = this.battingInf_5.controls['bowler_5'];
    this.runs_5 = this.battingInf_5.controls['runs_5'];
    this.balls_5 = this.battingInf_5.controls['balls_5'];
    this.fours_5 = this.battingInf_5.controls['fours_5'];
    this.sixes_5 = this.battingInf_5.controls['sixes_5'];

    //Batting Position # 6
    this.battingInf_6 = <FormGroup> this.form.controls['battingInf_6'];
    this.batsmanId_6 = this.battingInf_1.controls['batsmanId_6'];
    this.outTypeId_6 = this.battingInf_6.controls['outTypeId_6'];
    this.fielder_6 = this.battingInf_6.controls['fielder_6'];
    this.bowler_6 = this.battingInf_6.controls['bowler_6'];
    this.runs_6 = this.battingInf_6.controls['runs_6'];
    this.balls_6 = this.battingInf_6.controls['balls_6'];
    this.fours_6 = this.battingInf_6.controls['fours_6'];
    this.sixes_6 = this.battingInf_6.controls['sixes_6'];

    //Batting Position # 7
    this.battingInf_7 = <FormGroup> this.form.controls['battingInf_7'];
    this.batsmanId_7 = this.battingInf_1.controls['batsmanId_7'];
    this.outTypeId_7 = this.battingInf_7.controls['outTypeId_7'];
    this.fielder_7 = this.battingInf_7.controls['fielder_7'];
    this.bowler_7 = this.battingInf_7.controls['bowler_7'];
    this.runs_7 = this.battingInf_7.controls['runs_7'];
    this.balls_7 = this.battingInf_7.controls['balls_7'];
    this.fours_7 = this.battingInf_7.controls['fours_7'];
    this.sixes_7 = this.battingInf_7.controls['sixes_7'];

    //Batting Position # 8
    this.battingInf_8 = <FormGroup> this.form.controls['battingInf_8'];
    this.batsmanId_8 = this.battingInf_1.controls['batsmanId_8'];
    this.outTypeId_8 = this.battingInf_8.controls['outTypeId_8'];
    this.fielder_8 = this.battingInf_8.controls['fielder_8'];
    this.bowler_8 = this.battingInf_8.controls['bowler_8'];
    this.runs_8 = this.battingInf_8.controls['runs_8'];
    this.balls_8 = this.battingInf_8.controls['balls_8'];
    this.fours_8 = this.battingInf_8.controls['fours_8'];
    this.sixes_8 = this.battingInf_8.controls['sixes_8'];

    //Batting Position # 9
    this.battingInf_9 = <FormGroup> this.form.controls['battingInf_9'];
    this.batsmanId_9 = this.battingInf_1.controls['batsmanId_9'];
    this.outTypeId_9 = this.battingInf_9.controls['outTypeId_9'];
    this.fielder_9 = this.battingInf_9.controls['fielder_9'];
    this.bowler_9 = this.battingInf_9.controls['bowler_9'];
    this.runs_9 = this.battingInf_9.controls['runs_9'];
    this.balls_9 = this.battingInf_9.controls['balls_9'];
    this.fours_9 = this.battingInf_9.controls['fours_9'];
    this.sixes_9 = this.battingInf_9.controls['sixes_9'];

    //Batting Position # 10
    this.battingInf_10 = <FormGroup> this.form.controls['battingInf_10'];
    this.batsmanId_10 = this.battingInf_1.controls['batsmanId_10'];
    this.outTypeId_10 = this.battingInf_10.controls['outTypeId_10'];
    this.fielder_10 = this.battingInf_10.controls['fielder_10'];
    this.bowler_10 = this.battingInf_10.controls['bowler_10'];
    this.runs_10 = this.battingInf_10.controls['runs_10'];
    this.balls_10 = this.battingInf_10.controls['balls_10'];
    this.fours_10 = this.battingInf_10.controls['fours_10'];
    this.sixes_10 = this.battingInf_10.controls['sixes_10'];

    //Batting Position # 11
    this.battingInf_11 = <FormGroup> this.form.controls['battingInf_11'];
    this.batsmanId_11 = this.battingInf_1.controls['batsmanId_11'];
    this.outTypeId_11 = this.battingInf_11.controls['outTypeId_11'];
    this.fielder_11 = this.battingInf_11.controls['fielder_11'];
    this.bowler_11 = this.battingInf_11.controls['bowler_11'];
    this.runs_11 = this.battingInf_11.controls['runs_11'];
    this.balls_11 = this.battingInf_11.controls['balls_11'];
    this.fours_11 = this.battingInf_11.controls['fours_11'];
    this.sixes_11 = this.battingInf_11.controls['sixes_11'];

  }

  ngOnInit(): void {
    this.howOutTypes();
    this.getPlayerslist();

  }


  howOutTypes() {
    console.info("Fetching howOutTypes list: ")
    const types$ = this.matchesService.getHowOutType();
    types$.subscribe(responce => this.player_out_type = responce);
  }

  getPlayerslist() {
    console.info("Fetching Players list")
    const teams$ = this.matchesService.getPlayerslist();
    teams$.subscribe(responce => this.playersList = responce,
      () => console.log("responce", this.playersList));
  }

  batting_poistion = this.matchesConstants.getBattingPositions();

  onSelectedBatting(index, value) {
    console.log('index', index, 'value ', value)
    if (index == 0) {
      this.battingInf_1.controls['batsmanId_1'].setValue(value);
      console.info("this.battingInf_1.controls :: ", this.battingInf_1.controls.value)
    } else if (index == 1) {
      this.battingInf_2.controls['batsmanId_2'].setValue(value);
      console.info("this.battingInf_2.controls :: ", this.battingInf_2.controls)
    } else if (index == 2) {
      this.battingInf_3.controls['batsmanId_3'].setValue(value);
    }
    else if (index == 3) {
      this.battingInf_4.controls['batsmanId_4'].setValue(value);
    }
    else if (index == 4) {
      this.battingInf_5.controls['batsmanId_5'].setValue(value);
    }
    else if (index == 5) {
      this.battingInf_6.controls['batsmanId_6'].setValue(value);
    }
    else if (index == 6) {
      this.battingInf_7.controls['batsmanId_7'].setValue(value);
    }
    else if (index == 7) {
      this.battingInf_8.controls['batsmanId_8'].setValue(value);
    }
    else if (index == 8) {
      this.battingInf_9.controls['batsmanId_9'].setValue(value);
    }
    else if (index == 9) {
      this.battingInf_10.controls['batsmanId_10'].setValue(value);
    }
    else if (index == 10) {
      this.battingInf_11.controls['batsmanId_11'].setValue(value);
    }
    console.info("this.form.controls.value :: ", this.form.value)
  }

  onSelectedHowOutTypes(index, value) {
    console.log('index', index, 'value ', value)
    if (index == 0) {
      this.battingInf_1.controls['outTypeId_1'].setValue(value);
      console.info("this.battingInf_1.controls :: ", this.battingInf_1.controls.value)
    } else if (index == 1) {
      this.battingInf_2.controls['outTypeId_2'].setValue(value);
      console.info("this.battingInf_2.controls :: ", this.battingInf_2.controls)
    } else if (index == 2) {
      this.battingInf_3.controls['outTypeId_3'].setValue(value);
    }
    else if (index == 3) {
      this.battingInf_4.controls['outTypeId_4'].setValue(value);
    }
    else if (index == 4) {
      this.battingInf_5.controls['outTypeId_5'].setValue(value);
    }
    else if (index == 5) {
      this.battingInf_6.controls['outTypeId_6'].setValue(value);
    }
    else if (index == 6) {
      this.battingInf_7.controls['outTypeId_7'].setValue(value);
    }
    else if (index == 7) {
      this.battingInf_8.controls['outTypeId_8'].setValue(value);
    }
    else if (index == 8) {
      this.battingInf_9.controls['outTypeId_9'].setValue(value);
    }
    else if (index == 9) {
      this.battingInf_10.controls['outTypeId_10'].setValue(value);
    }
    else if (index == 10) {
      this.battingInf_11.controls['outTypeId_11'].setValue(value);
    }
    console.info("this.form.controls.value :: ", this.form.value)
  }

  onSelectedBowler(index, value: any) {
    console.log('index', index, 'value ', value)
    if (index == 0) {
      this.battingInf_1.controls['bowler_1'].setValue(value);
      console.info("this.battingInf_1.controls :: ", this.battingInf_1.controls.value)
    } else if (index == 1) {
      this.battingInf_2.controls['bowler_2'].setValue(value);
      console.info("this.battingInf_2.controls :: ", this.battingInf_2.controls)
    } else if (index == 2) {
      this.battingInf_3.controls['bowler_3'].setValue(value);
    }
    else if (index == 3) {
      this.battingInf_4.controls['bowler_4'].setValue(value);
    }
    else if (index == 4) {
      this.battingInf_5.controls['bowler_5'].setValue(value);
    }
    else if (index == 5) {
      this.battingInf_6.controls['bowler_6'].setValue(value);
    }
    else if (index == 6) {
      this.battingInf_7.controls['bowler_7'].setValue(value);
    }
    else if (index == 7) {
      this.battingInf_8.controls['bowler_8'].setValue(value);
    }
    else if (index == 8) {
      this.battingInf_9.controls['bowler_9'].setValue(value);
    }
    else if (index == 9) {
      this.battingInf_10.controls['bowler_10'].setValue(value);
    }
    else if (index == 10) {
      this.battingInf_11.controls['bowler_11'].setValue(value);
    }
    console.info("this.form.controls.value :: ", this.form.value)
  }

  onSelectedFielder(index, value: any) {
    console.log('index', index, 'value ', value)
    if (index == 0) {
      this.battingInf_1.controls['fielder_1'].setValue(value);
      console.info("this.battingInf_1.controls :: ", this.battingInf_1.controls.value)
    } else if (index == 1) {
      this.battingInf_2.controls['fielder_2'].setValue(value);
      console.info("this.battingInf_2.controls :: ", this.battingInf_2.controls)
    } else if (index == 2) {
      this.battingInf_3.controls['fielder_3'].setValue(value);
    }
    else if (index == 3) {
      this.battingInf_4.controls['fielder_4'].setValue(value);
    }
    else if (index == 4) {
      this.battingInf_5.controls['fielder_5'].setValue(value);
    }
    else if (index == 5) {
      this.battingInf_6.controls['fielder_6'].setValue(value);
    }
    else if (index == 6) {
      this.battingInf_7.controls['fielder_7'].setValue(value);
    }
    else if (index == 7) {
      this.battingInf_8.controls['fielder_8'].setValue(value);
    }
    else if (index == 8) {
      this.battingInf_9.controls['fielder_9'].setValue(value);
    }
    else if (index == 9) {
      this.battingInf_10.controls['fielder_10'].setValue(value);
    }
    else if (index == 10) {
      this.battingInf_11.controls['fielder_11'].setValue(value);
    }
  }

  onSelectedRuns(index, value) {
    console.log('index ', index, 'value', value)
    if (index == 0) {
      this.battingInf_1.controls['runs_1'].setValue(value);
      console.info("this.battingInf_1.controls :: ", this.battingInf_1.controls.value)
    } else if (index == 1) {
      this.battingInf_2.controls['runs_2'].setValue(value);
      console.info("this.battingInf_2.controls :: ", this.battingInf_2.controls)
    } else if (index == 2) {
      this.battingInf_3.controls['runs_3'].setValue(value);
    }
    else if (index == 3) {
      this.battingInf_4.controls['runs_4'].setValue(value);
    }
    else if (index == 4) {
      this.battingInf_5.controls['runs_5'].setValue(value);
    }
    else if (index == 5) {
      this.battingInf_6.controls['runs_6'].setValue(value);
    }
    else if (index == 6) {
      this.battingInf_7.controls['runs_7'].setValue(value);
    }
    else if (index == 7) {
      this.battingInf_8.controls['runs_8'].setValue(value);
    }
    else if (index == 8) {
      this.battingInf_9.controls['runs_9'].setValue(value);
    }
    else if (index == 9) {
      this.battingInf_10.controls['runs_10'].setValue(value);
    }
    else if (index == 10) {
      this.battingInf_11.controls['runs_11'].setValue(value);
    }
  }

  onSelectedBalls(index, value) {
    console.log('index ', index, 'value', value)
    if (index == 0) {
      this.battingInf_1.controls['balls_1'].setValue(value);
      console.info("this.battingInf_1.controls :: ", this.battingInf_1.controls.value)
    } else if (index == 1) {
      this.battingInf_2.controls['balls_2'].setValue(value);
      console.info("this.battingInf_2.controls :: ", this.battingInf_2.controls)
    } else if (index == 2) {
      this.battingInf_3.controls['balls_3'].setValue(value);
    }
    else if (index == 3) {
      this.battingInf_4.controls['balls_4'].setValue(value);
    }
    else if (index == 4) {
      this.battingInf_5.controls['balls_5'].setValue(value);
    }
    else if (index == 5) {
      this.battingInf_6.controls['balls_6'].setValue(value);
    }
    else if (index == 6) {
      this.battingInf_7.controls['balls_7'].setValue(value);
    }
    else if (index == 7) {
      this.battingInf_8.controls['balls_8'].setValue(value);
    }
    else if (index == 8) {
      this.battingInf_9.controls['balls_9'].setValue(value);
    }
    else if (index == 9) {
      this.battingInf_10.controls['balls_10'].setValue(value);
    }
    else if (index == 10) {
      this.battingInf_11.controls['balls_11'].setValue(value);
    }
  }

  onSelectedFours(index, value) {
    console.log('index ', index, 'value', value)
    if (index == 0) {
      this.battingInf_1.controls['fours_1'].setValue(value);
      console.info("this.battingInf_1.controls :: ", this.battingInf_1.controls.value)
    } else if (index == 1) {
      this.battingInf_2.controls['fours_2'].setValue(value);
      console.info("this.battingInf_2.controls :: ", this.battingInf_2.controls)
    } else if (index == 2) {
      this.battingInf_3.controls['fours_3'].setValue(value);
    }
    else if (index == 3) {
      this.battingInf_4.controls['fours_4'].setValue(value);
    }
    else if (index == 4) {
      this.battingInf_5.controls['fours_5'].setValue(value);
    }
    else if (index == 5) {
      this.battingInf_6.controls['fours_6'].setValue(value);
    }
    else if (index == 6) {
      this.battingInf_7.controls['fours_7'].setValue(value);
    }
    else if (index == 7) {
      this.battingInf_8.controls['fours_8'].setValue(value);
    }
    else if (index == 8) {
      this.battingInf_9.controls['fours_9'].setValue(value);
    }
    else if (index == 9) {
      this.battingInf_10.controls['fours_10'].setValue(value);
    }
    else if (index == 10) {
      this.battingInf_11.controls['fours_11'].setValue(value);
    }
  }


  onSelectedSixes(index, value) {
    console.log('index ', index, 'value', value)
    if (index == 0) {
      this.battingInf_1.controls['sixes_1'].setValue(value);
      console.info("this.battingInf_1.controls :: ", this.battingInf_1.controls.value)
    } else if (index == 1) {
      this.battingInf_2.controls['sixes_2'].setValue(value);
      console.info("this.battingInf_2.controls :: ", this.battingInf_2.controls)
    } else if (index == 2) {
      this.battingInf_3.controls['sixes_3'].setValue(value);
    }
    else if (index == 3) {
      this.battingInf_4.controls['sixes_4'].setValue(value);
    }
    else if (index == 4) {
      this.battingInf_5.controls['sixes_5'].setValue(value);
    }
    else if (index == 5) {
      this.battingInf_6.controls['sixes_6'].setValue(value);
    }
    else if (index == 6) {
      this.battingInf_7.controls['sixes_7'].setValue(value);
    }
    else if (index == 7) {
      this.battingInf_8.controls['sixes_8'].setValue(value);
    }
    else if (index == 8) {
      this.battingInf_9.controls['sixes_9'].setValue(value);
    }
    else if (index == 9) {
      this.battingInf_10.controls['sixes_10'].setValue(value);
    }
    else if (index == 10) {
      this.battingInf_11.controls['sixes_11'].setValue(value);
    }
  }

  check() {
    console.log("check val")
  }
}
