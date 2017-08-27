import {Component} from "@angular/core";
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
  selector: 'submit-score-wickets',
  templateUrl: 'wickets.html',
  //styleUrls: ['../../../../theme/components/baCheckbox/baCheckbox.scss'],
  styleUrls: ['../submitScore.scss'],
})
export class SubmitScoreWicketComponent {

  public wicketForm: FormGroup;
  public name: AbstractControl;
  public wicket_1: AbstractControl;
  public wicket_2: AbstractControl;
  public wicket_3: AbstractControl;
  public wicket_4: AbstractControl;
  public wicket_5: AbstractControl;
  public wicket_6: AbstractControl;
  public wicket_7: AbstractControl;
  public wicket_8: AbstractControl;
  public wicket_9: AbstractControl;
  public wicket_10: AbstractControl;
  public wicket_11: AbstractControl;

  constructor(fb: FormBuilder, private matchesService: MatchesService, private matchesConstants: MatchesConstants) {


    this.wicketForm = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'wicket_1': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'wicket_2': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'wicket_3': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'wicket_4': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'wicket_5': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'wicket_6': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'wicket_7': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'wicket_8': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'wicket_9': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'wicket_10': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'wicket_11': ['', Validators.compose([Validators.required, Validators.minLength(3)])],

  });
    this.name = this.wicketForm.controls['name'];
    this.wicket_1 = this.wicketForm.controls['wicket_1'];
    this.wicket_2 = this.wicketForm.controls['wicket_2'];
    this.wicket_3 = this.wicketForm.controls['wicket_3'];
    this.wicket_4 = this.wicketForm.controls['wicket_4'];
    this.wicket_5 = this.wicketForm.controls['wicket_5'];
    this.wicket_6 = this.wicketForm.controls['wicket_6'];
    this.wicket_7 = this.wicketForm.controls['wicket_7'];
    this.wicket_8 = this.wicketForm.controls['wicket_8'];
    this.wicket_9 = this.wicketForm.controls['wicket_9'];
    this.wicket_10 = this.wicketForm.controls['wicket_10'];
    this.wicket_11 = this.wicketForm.controls['wicket_11'];

}
  batting_poistion = this.matchesConstants.getBattingPositions();
  onSelectedWickets(type: any, value: any) {
    console.info("onSelectedWickets: Type:", type, 'Value: ', value)
    //this.extrasDetails.controls[type].setValue(value);
    //console.log('this.extrasDetails.controls ', this.extrasDetails.value)
  }
}
