/**
 * Created by HudaZulifqar on 6/24/2017.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class MatchesConstants {

  scheduelTable = {
    title: 'Matches Fixture',
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
      seasonId: {
        title: 'Season ID',
        type: 'number'
      },
      seasonName: {
        title: 'Season Name',
        type: 'string'
      },
      awayTeam: {
        title: 'Away Team',
        type: 'string'
      },
      homeTeam: {
        title: 'Home Team',
        type: 'string'
      },
      formattedDate: {
        title: 'Date',
        type: 'string'
      },
      ground: {
        title: 'Ground',
        type: 'string'
      },
      umpireFName: {
        title: 'Umpire First Name',
        type: 'string'
      },
      umpireLName: {
        title: 'Umpire Last Name',
        type: 'string'
      },
      week: {
        title: 'Week',
        type: 'string'
      }
    }
  }

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
        title: 'Date',
        type: 'string',
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
        title: 'MOM',
        type: 'string',
      },
      match_status: {
        title: 'Result',
        type: 'string',
      },
    },
  };
}
