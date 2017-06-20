// tslint:disbale
import { Component } from '@angular/core';
import { TreeModel } from 'ng2-tree';

@Component({
  selector: 'results-view',
  templateUrl: './results.html',
})

export class Results {

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

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    columns: {
      match_date: {
        title: 'Match',
        type: 'string'
      },
      host_team: {
        title: 'Host Team',
        type: 'string'
      },
      guest_team: {
        title: 'Guest Team',
        type: 'string'
      },
      player_first_name: {
        title: 'Man of the Match',
        type: 'string'
      },
      player_last_name: {
        title: 'Match Status',
        type: 'string'
      },
      man_of_the_match: {
        title: 'Man of the Match',
        type: 'string'
      },
      match_status: {
        title: "Match Status",
        type: 'string'
      }
    }
  };

  source = [
    {
      "match_date": "2017-02-18",
      "host_team": "Tigers Pro",
      "guest_team": "Panthers",
      "player_first_name": "Gohar",
      "player_last_name": "Tareen",
      "man_of_the_match": null,
      "match_status": "Tigers Pro won by 7 wickets"
    },
    {
      "match_date": "2017-02-25",
      "host_team": "Tigers Pro",
      "guest_team": "Lagaan Jaguars",
      "player_first_name": "Awais",
      "player_last_name": "Mubarak",
      "man_of_the_match": null,
      "match_status": "Tigers Pro won by 6 wickets"
    },
    {
      "match_date": "2017-02-25",
      "host_team": "Hurricanes",
      "guest_team": "Thunders",
      "player_first_name": "Prabhuram",
      "player_last_name": "Jagadeesan",
      "man_of_the_match": null,
      "match_status": "Hurricanes won by 5 wickets"
    },
    {
      "match_date": "2017-02-26",
      "host_team": "Lions",
      "guest_team": "Star XI",
      "player_first_name": "Samir",
      "player_last_name": "Maredia",
      "man_of_the_match": null,
      "match_status": "Star XI won by 14 runs"
    }]

  constructor() {
  }

}
