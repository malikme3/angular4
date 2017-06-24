/**
 * Created by HudaZulifqar on 6/24/2017.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class MatchesConstants {

  scoreTableSettings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    pager: {
      display: true,
      perPage: 10,
    },
    columns: {
      match_date: {
        title: 'Match Date',
        type: 'string',
        width: '100',
        editable: true,
      },
      host_team: {
        title: 'Host Team',
        type: 'string',
      },
      guest_team: {
        title: 'Guest Team',
        type: 'string',
      },
      player_first_name: {
        title: 'Man of the Match',
        type: 'string',
      },
      match_status: {
        title: 'Match Status',
        type: 'string',
      },
    },
  };
}
