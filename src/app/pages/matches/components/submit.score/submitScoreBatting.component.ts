import {Component} from "@angular/core";
import {IOption} from "ng-select";
import {AbstractControl, EmailValidator, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatchesService} from "../../matches.service";
/**
 * Created by HudaZulifqar on 8/2/2017.
 */
@Component({
  selector: 'submit-score-batting',
  templateUrl: 'SubmitScore_step2.html',
  //styleUrls: ['../../../../theme/components/baCheckbox/baCheckbox.scss'],
  styleUrls: ['submitScore.scss'],
})
export class SubmitScoreBatting {

  public submitted: boolean = false;
  public form: FormGroup;
  public name: AbstractControl;


  constructor(fb: FormBuilder, private matchesService: MatchesService) {


    this.form = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],


    });
    this.name = this.form.controls['name'];
  }

  player_out_type = [
    {label: 'Did not Bat', value: 'dnb', position: 0},
    {label: 'LBW', value: 'lbw', position: 0},
    {label: 'Not Out', value: 'notout', position: 0},
    {label: 'Bowled', value: 'bowled', position: 0},
    {label: 'Caught', value: 'caught', position: 0},
    {label: 'Caught && Bowled', value: 'c&b', position: 0},
    {label: 'Run Out', value: 'runout', position: 0},
    {label: 'Hit Wicket', value: 'hitwicket', position: 0},
    {label: 'Retired Hurst', value: 'retdhurt', position: 0},
    {label: 'Hit Twice', value: 'hittwice', position: 0},
    {label: 'Handled Ball', value: 'handledball', position: 0},
    {label: 'Absent Hurt', value: 'absenthurt', position: 0},
    {label: 'Absent Ill', value: 'absentill', position: 0},
    {label: 'Retired Out', value: 'Retiredout', position: 0},
    {label: 'Obstructing the field ', value: 'obstrfield', position: 0}

  ];

  batting_poistion = [
    {
      id: 1,
      type: 'First Batting Position',
      wicket: 'wicket#1'
    },
    {
      id: 2,
      type: 'Second Batting Position',
      wicket: 'wicket#2'

    },
    {
      id: 3,
      type: 'Third Batting Position',
      wicket: 'wicket#3'
    },
    {
      id: 4,
      type: 'Fourth Batting Position',
      wicket: 'wicket#4'
    },
    {
      id: 5,
      type: 'Fifth Batting Position',
      wicket: 'wicket#5'
    }, {
      id: 6,
      type: 'Sixt Batting Position',
      wicket: 'wicket#6'
    },
    {
      id: 7,
      type: 'Seventh Batting Position',
      wicket: 'wicket#7'
    },
    {
      id: 8,
      type: 'Eight Batting Position',
      wicket: 'wicket#8'
    },
    {
      id: 9,
      type: 'Ninth Batting Position',
      wicket: 'wicket#9'
    },
    {
      id: 10,
      type: 'Tenth Batting Position',
      wicket: 'wicket#10'
    }
    ,
    {
      id: 11,
      type: 'Eleventh Batting Position'
    }];


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
    if (this.form.valid) {
    }
  }
}
