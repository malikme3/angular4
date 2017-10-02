import {Injectable} from '@angular/core';
import {BaThemeConfigProvider} from '../../../theme';

@Injectable()
export class CalendarService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {

    let dashboardColors = this._baConfig.get().colors.dashboard;
    return {
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: '2017-03-08',
      selectable: true,
      selectHelper: true,
      editable: true,
      eventLimit: true,
      events: [
        {
          title: 'T20 Match: Panthor vs Ravens',
          start: '2017-03-01',
          color: dashboardColors.green
        },
        {
          title: 'T20 Match: Tigers vs Lion',
          start: '2017-03-07',
          end: '2017-03-10',
          color: dashboardColors.yellow
        },
        {
          title: 'T20 Match: Laggan vs Lions',
          start: '2017-03-14T20:00:00',
          color: dashboardColors.redBrown
        },
        {
          title: 'T20 Match: Laggan vs Hawks',
          start: '2017-04-01T07:00:00',
          color: dashboardColors.redBlue
        }
      ]
    };
  }
}
