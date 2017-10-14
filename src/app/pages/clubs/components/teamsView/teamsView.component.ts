/* tslint:disable */
import { Component } from '@angular/core';
import { TreeModel } from 'ng2-tree';
import {ClubsService} from "../../clubs.service";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'teams-view',
  templateUrl: './teamsView.html',
  styleUrls: ['./ctcl.news.scss'],
})

export class TeamsView {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  newsList:any;
  tree: TreeModel = {
    value: 'CTCL Clubs',
    children: [
      {
        value: 'Rounf Rocks',
        children: [
          { value: 'Lions' },
          { value: 'Laggan' },
          { value: 'Tiger' },
        ]
      },
      {
        value: 'HCCA',
        children: [
          { value: 'Ravens' },
          { value: 'Gladiators' },
          { value: 'Hawks' },
        ]
      }
    ]
  };

  constructor(private clubsService: ClubsService) {
  }

  ngOnInit() {
    this.ctclNews();
  }

  ctclNews() {
    console.info("Fetching clubs list: ")
    const types$ = this.clubsService.getCtclNews();
    types$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.newsList = responce,
      (err) => console.error('getCtclNews: Res Error =>', err),
      () => this.ctclNewsReqCompleted());
  }
  ctclNewsReqCompleted(){
    console.log("ctclNews is completed", this.newsList)
  }
}
