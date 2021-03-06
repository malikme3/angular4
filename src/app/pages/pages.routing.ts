/* tslint:disable */
import {Routes, RouterModule} from '@angular/router';
import {Pages} from './pages.component';
import {ModuleWithProviders} from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'ctcl',
    loadChildren: 'app/ctcl/ctcl.module#CtclModule'
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule'
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'clubs', loadChildren: '../ctcl/clubs/clubs.module#ClubsModule'},
      {path: 'matches', loadChildren: '../ctcl//Matches/matches.module#MatchesModule'},
      {path: 'players', loadChildren: '../ctcl//players/players.module#PlayersModule'},
      {path: 'statistics', loadChildren: '../ctcl/statistics/statistics.module#StatisticsModule'},
      {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
      {path: 'editors', loadChildren: './editors/editors.module#EditorsModule'},
      {path: 'components', loadChildren: './components/components.module#ComponentsModule'},
      {path: 'charts', loadChildren: './charts/charts.module#ChartsModule'},
      {path: 'ui', loadChildren: './ui/ui.module#UiModule'},
      {path: 'forms', loadChildren: './forms/forms.module#FormsInPutModule'},
      {path: 'tables', loadChildren: './tables/tables.module#TablesModule'},
      {path: 'maps', loadChildren: './maps/maps.module#MapsModule'}
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
