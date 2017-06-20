import { Component } from '@angular/core';
import { TreeModel } from 'ng2-tree';

@Component({
  selector: 'teams-view',
  templateUrl: './teamsView.html',
})

export class TeamsView {

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

  constructor() {
  }

}
