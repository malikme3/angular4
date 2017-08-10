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
  selector: 'submit-score-extras',
  templateUrl: 'extras.html',
  //styleUrls: ['../../../../theme/components/baCheckbox/baCheckbox.scss'],
  styleUrls: ['../submitScore.scss'],
})
export class SubmitScoreExtrasComponent {

  public extrasForm: FormGroup;
  public name: AbstractControl;
  //Extras
  public legbye: AbstractControl;
  public byes: AbstractControl;
  public wides: AbstractControl;
  public noballs: AbstractControl;
  public extrastotal: AbstractControl;

  constructor(fb: FormBuilder, private matchesService: MatchesService, private matchesConstants: MatchesConstants) {


    this.extrasForm = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      //Extras
      'legbye': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'byes': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'wides': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'noballs': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'extrastotal': ['', Validators.compose([Validators.required, Validators.minLength(4)])],

    });

    this.name = this.extrasForm.controls['name'];
    this.legbye = this.extrasForm.controls['legbye'];
    this.byes = this.extrasForm.controls['byes'];
    this.wides = this.extrasForm.controls['wides'];
    this.noballs = this.extrasForm.controls['noballs'];
    this.extrastotal = this.extrasForm.controls['extrastotal'];


  }

  batting_poistion = this.matchesConstants.getBattingPositions();

  onSelectedExtras(type: any, value: any) {
    console.info("onSelectedExtras: Type:", type, 'Value: ', value)
    //this.extrasDetails.controls[type].setValue(value);
    //console.log('this.extrasDetails.controls ', this.extrasDetails.value)
  }
}
