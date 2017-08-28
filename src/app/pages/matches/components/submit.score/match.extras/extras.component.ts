import {Component, Input} from "@angular/core";
import {MatchesService} from "../../../matches.service";
import {MatchesConstants} from "../../matches.constant.service";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import "rxjs/add/operator/startWith";
import "rxjs/add/operator/map";
import {MatchesDataStoreService} from "../../matches-data-store";
/*/!**
 * Created by HudaZulifqar on 6/27/2017.
 *!/*/
@Component({
  selector: 'submit-score-extras',
  templateUrl: 'extras.html',
  //styleUrls: ['../../../../theme/components/baCheckbox/baCheckbox.scss'],
  styleUrls: ['../submitScore.scss'],
})
export class SubmitScoreExtrasComponent {

  @Input() innings: string;
  private isSubmitted: boolean = false;
  @Input() isFirstInnings: boolean = true;
  private extrasResStatus: string;

  public extrasForm: FormGroup;
  public innings_id: AbstractControl;
  public game_id: AbstractControl;
  public team: AbstractControl;
  //Extras
  public legbyes: AbstractControl;
  public byes: AbstractControl;
  public wides: AbstractControl;
  public noballs: AbstractControl;
  public total: AbstractControl;

  constructor(fb: FormBuilder,
              private matchesService: MatchesService,
              private matchesConstants: MatchesConstants,
              private  matchesDataStoreService: MatchesDataStoreService) {


    this.extrasForm = fb.group({
      'innings_id': ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.pattern('^(0|[1-9][0-9]*)')])],
      'game_id': ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.pattern('^(0|[1-9][0-9]*)')])],
      'team': ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.pattern('^(0|[1-9][0-9]*)')])],
      //Extras
      'legbyes': ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.pattern('^(0|[1-9][0-9]*)')])],
      'byes': ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.pattern('^(0|[1-9][0-9]*)')])],
      'wides': ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.pattern('^(0|[1-9][0-9]*)')])],
      'noballs': ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.pattern('^(0|[1-9][0-9]*)')])],
      'total': ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.pattern('^(0|[1-9][0-9]*)')])],

    });
    this.innings_id = this.extrasForm.controls['innings_id'];
    this.game_id = this.extrasForm.controls['game_id'];
    this.team = this.extrasForm.controls['team'];
    this.legbyes = this.extrasForm.controls['legbyes'];
    this.byes = this.extrasForm.controls['byes'];
    this.wides = this.extrasForm.controls['wides'];
    this.noballs = this.extrasForm.controls['noballs'];
    this.total = this.extrasForm.controls['total'];


  }

  batting_poistion = this.matchesConstants.getBattingPositions();

  onNotify() {
    this.submitExtras();
  }

  getMatchData() {
    let matchInfo$ = this.matchesDataStoreService.getMatchDetails();
    console.log("Match Info", matchInfo$)

    if (!this.matchesService.isEmpty(matchInfo$)) {
      this.extrasForm.controls['innings_id'].setValue('1');
      this.extrasForm.controls['game_id'].setValue(matchInfo$[0].game_id);
      if (this.isFirstInnings) {
        this.extrasForm.controls['team'].setValue(matchInfo$[0].batting_first_id);
        this.extrasForm.controls['innings_id'].setValue('1');
      } else {
        this.extrasForm.controls['team'].setValue(matchInfo$[0].batting_second_id);
        this.extrasForm.controls['innings_id'].setValue('2');
      }
    }
  }

  submitExtras() {

    this.getMatchData();
    let fowValue = this.extrasForm.value;
    console.log("SubmitScoreExtrasComponent :: Request", fowValue)
    const fow$ = this.matchesService.submit_score_extras_details(fowValue)
    fow$.subscribe(responce => this.extrasResStatus = responce);
    this.isSubmitted = true;
  }

  onSelectedExtras(type: any, value: any) {
    this.isSubmitted = false;
    console.info("onSelectedExtras: Type:", type, 'Value: ', value)
    this.extrasForm.controls[type].setValue(value);
    console.log('this.extrasDetails.controls ', this.extrasForm.value)
  }
}
