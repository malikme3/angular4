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
        type: Date,
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
  // for detailed score card
  detailedScoreSettings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    pager: {
      display: true,
      perPage: 10,
    },
    hideSubHeader: true,
    columns: {

      batting_position: {
        title: '',
        type: 'number',
      },
      BatterLName: {
        title: '',
        type: 'string',
        width: '10px'
      },
      BatterFName: {
        title: '',
        type: 'string',
        width: '10px'
      },
      runs: {
        title: 'R',
        type: 'number',
        width: '5px'
      },
      balls: {
        title: 'B',
        type: 'number',
        width: '5px'
      },
      fours: {
        title: '4s',
        type: 'number',
        width: '5px'
      },
      sixes: {
        title: '6s',
        type: 'number',
        width: '5px'
      },

      HowOutAbbrev: {
        title: '',
        type: 'string',
      },
      AssistLName: {
        title: '',
        type: 'string',
      },
      AssistFName: {
        title: '',
        type: 'string',
      },
      AssistFInitial: {
        title: '',
        type: 'string',
      },
      BowlerLName: {
        title: '',
        type: 'string',
      },
      BowlerFName: {
        title: '',
        type: 'string',
      },
      BowlerFInitial: {
        title: '',
        type: 'string',
      }
      ,
      Batter_id: {
        title: 'SR',
        type: 'number',
      }
    }
  };

}
