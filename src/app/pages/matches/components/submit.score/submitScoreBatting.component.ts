import {Component} from "@angular/core";
import {IOption} from "ng-select";
import {AbstractControl, EmailValidator, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatchesService} from "../../matches.service";
import {MatchesConstants} from "../matches.constant.service";
/**
 * Created by HudaZulifqar on 8/2/2017.
 */
@Component({
  selector: 'submit-score',
  templateUrl: 'SubmitScore_step2.html',
  //styleUrls: ['../../../../theme/components/baCheckbox/baCheckbox.scss'],
  styleUrls: ['submitScore.scss'],
})
export class SubmitScoreBatting {

  public submitted: boolean = false;
  public battingForm: FormGroup;
  public battingName: AbstractControl;


  constructor(fb: FormBuilder, private matchesService: MatchesService,  private matchesConstants: MatchesConstants) {


    this.battingForm = fb.group({
      'battingName': ['', Validators.compose([Validators.required, Validators.minLength(4)])],

    });
    this.battingName = this.battingForm.controls['battingName'];
  }
  player_out_type = this.matchesConstants.getPlayerOutType();
  batting_poistion =  this.matchesConstants.getBattingPositions();


  onSelected(val, val3) {
    console.log('val3 val :: ', val);
    console.log('val val :: ', val3);
  }

  submit(event) {
    console.log('event :: ', event);
  };

  public onSubmit(values: Object): void {
    this.submitted = true;
    console.log("value  ", values)
    if (this.battingForm.valid) {
    }
  }
}
