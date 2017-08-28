/*/!**
 * Created by HudaZulifqar on 6/27/2017.
 *!/*/

import {Component} from "@angular/core";
import {MatchesService} from "../../matches.service";
import {MatchesConstants} from "../matches.constant.service";
import "rxjs/add/operator/startWith";
import "rxjs/add/operator/map";

import {AbstractControl, FormBuilder, FormGroup} from "@angular/forms";
import {MatchesDataStoreService} from "../matches-data-store";

@Component({
  selector: 'submit-score',
  // templateUrl: 'newSubmit.html',
  templateUrl: 'submit.match.score.html',
  styleUrls: ['submitScore.scss'],
})
export class SubmitScoreComponent {

//default status
  public isFirstInnings: boolean = true;
  public isBasicDetails: boolean = true;
  public isBatting: boolean = false;
  public isBowling: boolean = false;
  public isExtras: boolean = false;

  public battingForm: FormGroup;
  public battingName: AbstractControl;

  constructor(fb: FormBuilder, private matchesService: MatchesService,
              private matchesConstants: MatchesConstants, private matchesDataStoreService: MatchesDataStoreService) {

  }

  ngOnInit(): void {
    this.isBasicDetails = false;
    this.isFirstInnings = false;
    this.isExtras = true;
  }

}
