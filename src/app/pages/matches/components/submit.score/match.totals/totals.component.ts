import {Component, EventEmitter, Input, Output} from "@angular/core";
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
  selector: 'submit-score-totals',
  templateUrl: 'totals.html',
  //styleUrls: ['../../../../theme/components/baCheckbox/baCheckbox.scss'],
  styleUrls: ['../submitScore.scss'],
})
export class SubmitScoreTotalsComponent {
  @Output() notify: EventEmitter<any> = new EventEmitter<any>();
  @Input() innings: string;
  @Input() isFirstInnings: boolean = true;
  isSubmitted: boolean = false;
  public totalsResStatus: string;

  public totalsForm: FormGroup;
  public name: AbstractControl;
  public game_id: AbstractControl;
  public innings_id: AbstractControl;
  public team: AbstractControl;
  public wickets: AbstractControl;
  public overs: AbstractControl;
  public total: AbstractControl;

  constructor(fb: FormBuilder, private matchesService: MatchesService, private matchesConstants: MatchesConstants,
              private matchesDataStoreService: MatchesDataStoreService) {


    this.totalsForm = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(2)]), Validators.pattern('^(0|[1-9][0-9]*)')],
      'game_id': ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.pattern('^(0|[1-9][0-9]*)')])],
      'team': ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.pattern('^(0|[1-9][0-9]*)')])],
      'innings_id': ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.pattern('^(0|[1-9][0-9]*)')])],
      'wickets': ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.pattern('^(0|[1-9][0-9]*)')])],
      'overs': ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(4)])],
      'total': ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern('^(0|[1-9][0-9]*)')])],
    });

    this.name = this.totalsForm.controls['name'];
    this.game_id = this.totalsForm.controls['game_id'];
    this.innings_id = this.totalsForm.controls['innings_id'];
    this.team = this.totalsForm.controls['team'];
    this.wickets = this.totalsForm.controls['wickets'];
    this.overs = this.totalsForm.controls['overs'];
    this.total = this.totalsForm.controls['total'];

  }

  batting_poistion = this.matchesConstants.getBattingPositions();

  onClick() {
    console.log('this.totalsForm.value from total: ', this.totalsForm.value)
    this.notify.emit(this.totalsForm.value);
  }

  getMatchData() {
    let matchInfo$ = this.matchesDataStoreService.getMatchDetails();
    console.log("Match Info", matchInfo$)

    if (!this.matchesService.isEmpty(matchInfo$)) {
      this.totalsForm.controls['game_id'].setValue(matchInfo$[0].game_id);
      if (this.isFirstInnings) {
        this.totalsForm.controls['team'].setValue(matchInfo$[0].batting_first_id);
        this.totalsForm.controls['innings_id'].setValue('1');
      } else {
        this.totalsForm.controls['team'].setValue(matchInfo$[0].batting_second_id);
        this.totalsForm.controls['innings_id'].setValue('2');
      }
    }
  }

  onNotify() {
    console.log("Ready To be Sumitted ");
    this.totalsForm.controls['innings_id'].setValue(3);
    this.totalsForm.controls['game_id'].setValue(1);
    this.submitTotals();
  }

  submitTotals() {

    this.getMatchData();
    let fowValue = this.totalsForm.value;
    console.log("SubmitScoreTotalsComponent :: Request", fowValue)
    const fow$ = this.matchesService.scorecard_total_details(fowValue)
    fow$.subscribe(responce => this.totalsResStatus = responce);
    this.isSubmitted = true;

  }

  onSelectedTotals(type: any, value: any) {
    this.isSubmitted = false;
    console.info("onSelectedTotals: Type:", type, 'Value: ', value)
    //this.extrasDetails.controls[type].setValue(value);
    //console.log('this.extrasDetails.controls ', this.extrasDetails.value)
  }
}
