import {Component, EventEmitter, Output} from "@angular/core";
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
  selector: 'submit-score-totals',
  templateUrl: 'totals.html',
  //styleUrls: ['../../../../theme/components/baCheckbox/baCheckbox.scss'],
  styleUrls: ['../submitScore.scss'],
})
export class SubmitScoreTotalsComponent {
  @Output() notify: EventEmitter<any> = new EventEmitter<any>();

  public totalsForm: FormGroup;
  public name: AbstractControl;
  public gameId: AbstractControl;
  public inningsId: AbstractControl;
  public wickets: AbstractControl;
  public overs: AbstractControl;
  public total: AbstractControl;

  constructor(fb: FormBuilder, private matchesService: MatchesService, private matchesConstants: MatchesConstants) {


    this.totalsForm = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'gameId': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'inningsId': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'wickets': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'overs': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'total': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    });

    this.name = this.totalsForm.controls['name'];
    this.gameId = this.totalsForm.controls['gameId'];
    this.inningsId = this.totalsForm.controls['inningsId'];
    this.wickets = this.totalsForm.controls['wickets'];
    this.overs = this.totalsForm.controls['overs'];
    this.total = this.totalsForm.controls['total'];

  }

  batting_poistion = this.matchesConstants.getBattingPositions();
onClick(){
  console.log('this.totalsForm.value from total: ',this.totalsForm.value)
  this.notify.emit(this.totalsForm.value);
}
  onSelectedTotals(type: any, value: any) {
    console.info("onSelectedTotals: Type:", type, 'Value: ', value)
    //this.extrasDetails.controls[type].setValue(value);
    //console.log('this.extrasDetails.controls ', this.extrasDetails.value)
  }
}
