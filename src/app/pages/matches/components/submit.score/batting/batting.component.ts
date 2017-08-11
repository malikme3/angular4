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
  player_out_type
  public battingForm: FormGroup;
  public name: AbstractControl;
  public gameId: AbstractControl;
  public inningsId: AbstractControl;
  public runs: AbstractControl;
  public balls: AbstractControl;
  public fours: AbstractControl;
  public sixes: AbstractControl;

  //Batting positions
  public position_0: AbstractControl;
  public position_1: AbstractControl;
  public position_2: AbstractControl;
  public position_3: AbstractControl;
  public position_4: AbstractControl;
  public position_5: AbstractControl;
  public position_6: AbstractControl;
  public position_7: AbstractControl;
  public position_8: AbstractControl;
  public position_9: AbstractControl;
  public position_10: AbstractControl;
  public position_11: AbstractControl;

  //how out tupes
  public outType_1: AbstractControl;
  public outType_2: AbstractControl;
  public outType_3: AbstractControl;
  public outType_4: AbstractControl;
  public outType_5: AbstractControl;
  public outType_6: AbstractControl;
  public outType_7: AbstractControl;
  public outType_8: AbstractControl;
  public outType_9: AbstractControl;
  public outType_10: AbstractControl;
  public outType_11: AbstractControl;
  public outType_12: AbstractControl;
  public outType_13: AbstractControl;
  public outType_14: AbstractControl;
  public outType_15: AbstractControl;
  public outType_16: AbstractControl;



  constructor(fb: FormBuilder, private matchesService: MatchesService, private matchesConstants: MatchesConstants) {


    this.battingForm = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'gameId': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'inningsId': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'runs': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'balls': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'fours': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'sixes': ['', Validators.compose([Validators.required, Validators.minLength(3)])],

      //Batting positions
      'position_0': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'position_1': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'position_2': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'position_3': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'position_4': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'position_5': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'position_6': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'position_7': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'position_8': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'position_9': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'position_10': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'position_11': ['', Validators.compose([Validators.required, Validators.minLength(3)])],

      //how out tupes
      'outType_1': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'outType_2': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'outType_3': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'outType_4': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'outType_5': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'outType_6': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'outType_7': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'outType_8': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'outType_9': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'outType_10': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'outType_11': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'outType_12': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'outType_13': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'outType_14': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'outType_15': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'outType_16': ['', Validators.compose([Validators.required, Validators.minLength(3)])],


    });
    this.name = this.battingForm.controls['name'];
    this.gameId = this.battingForm.controls['gameId'];
    this.inningsId = this.battingForm.controls['inningsId'];
    this.runs = this.battingForm.controls['runs'];
    this.balls = this.battingForm.controls['balls'];
    this.fours = this.battingForm.controls['fours'];
    this.sixes = this.battingForm.controls['sixes'];

    //Batting positions
    this.position_0 = this.battingForm.controls['sixes'];
    this.position_1 = this.battingForm.controls['sixes'];
    this.position_2 = this.battingForm.controls['sixes'];
    this.position_3 = this.battingForm.controls['sixes'];
    this.position_4 = this.battingForm.controls['sixes'];
    this.position_5 = this.battingForm.controls['sixes'];
    this.position_6 = this.battingForm.controls['sixes'];
    this.position_7 = this.battingForm.controls['sixes'];
    this.position_8 = this.battingForm.controls['sixes'];
    this.position_9 = this.battingForm.controls['sixes'];
    this.position_10 = this.battingForm.controls['sixes'];
    this.position_11 = this.battingForm.controls['sixes'];

    //how out tupes
    this.outType_1 = this.battingForm.controls['outType_1'];
    this.outType_2 = this.battingForm.controls['outType_2'];
    this.outType_3 = this.battingForm.controls['outType_3'];
    this.outType_4 = this.battingForm.controls['outType_4'];
    this.outType_5 = this.battingForm.controls['outType_5'];
    this.outType_6 = this.battingForm.controls['outType_6'];
    this.outType_7 = this.battingForm.controls['outType_7'];
    this.outType_8 = this.battingForm.controls['outType_8'];
    this.outType_9 = this.battingForm.controls['outType_9'];
    this.outType_10= this.battingForm.controls['outType_10'];
    this.outType_11= this.battingForm.controls['outType_11'];
    this.outType_12 = this.battingForm.controls['outType_12'];
    this.outType_13 = this.battingForm.controls['outType_13'];
    this.outType_14 = this.battingForm.controls['outType_14'];
    this.outType_15 = this.battingForm.controls['outType_15'];
    this.outType_16 = this.battingForm.controls['outType_16'];
  }

  ngOnInit(): void {
    this.howOutTypes();
  }

  batting_poistion = this.matchesConstants.getBattingPositions();

  howOutTypes() {
    console.info("Fetching howOutTypes list: ")
    const types$ = this.matchesService.getHowOutType();
    types$.subscribe(responce => this.player_out_type = responce);
  }

  onClick() {
    console.log('Batting_nested ==> this.battingForm.value: ', this.battingForm.value)
    this.notify.emit(this.battingForm.value);
  }

  onSelectedBatting(type: any, value: any) {
    let postion = 'position_' + type;
    console.info("onSelectedBatting: postion:", postion, 'Value: ', value)
    this.battingForm.controls[postion].setValue(value);
    console.log('this.battingForm.controls ', this.battingForm.value)
  }
  onSelectedHowOutTypes(type: any, value: any) {
    let postion = 'outType_1' + type;
    console.info("onSelectedHowOutTypes: postion:", postion, 'Value: ', value)
    this.battingForm.controls[postion].setValue(value);
    console.log('this.battingForm.controls ', this.battingForm.value)
  }
}
