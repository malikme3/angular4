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
  selector: 'submit-score-batting',
  templateUrl: 'batting.html',
  //styleUrls: ['../../../../theme/components/baCheckbox/baCheckbox.scss'],
  styleUrls: ['../submitScore.scss'],
})
export class SubmitScoreBattingComponent {
  @Output() notify: EventEmitter<any> = new EventEmitter<any>();

  public battingForm: FormGroup;
  public name: AbstractControl;
  public gameId: AbstractControl;
  public inningsId: AbstractControl;
  public wickets: AbstractControl;
  public overs: AbstractControl;
  public total: AbstractControl;

  constructor(fb: FormBuilder, private matchesService: MatchesService, private matchesConstants: MatchesConstants) {


    this.battingForm = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'gameId': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'inningsId': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'wickets': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'overs': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'total': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    });

    this.name = this.battingForm.controls['name'];
    this.gameId = this.battingForm.controls['gameId'];
    this.inningsId = this.battingForm.controls['inningsId'];
    this.wickets = this.battingForm.controls['wickets'];
    this.overs = this.battingForm.controls['overs'];
    this.total = this.battingForm.controls['total'];

  }

  batting_poistion = this.matchesConstants.getBattingPositions();
onClick(){
  console.log('this.battingForm.value from total: ',this.battingForm.value)
  this.notify.emit(this.battingForm.value);
}
  onSelectedBatting(type: any, value: any) {
    console.info("onSelectedBatting: Type:", type, 'Value: ', value)
    //this.extrasDetails.controls[type].setValue(value);
    //console.log('this.extrasDetails.controls ', this.extrasDetails.value)
  }
}
