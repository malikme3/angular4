/**
 * Created by HudaZulifqar on 8/18/2017.
 */
import {Component} from "@angular/core";
import {Player} from "./player";
import {Subject} from "rxjs/Subject";
import {DashboardService} from "../dashboard.service";

@Component({
  selector: 'top-players',
  templateUrl: 'topPlayers.html',
  styleUrls: ['topPlayers.scss'],
})
export class TopPlayersComponent {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  battingRecordsList: any;
  cars: Player[];

  constructor(private dashboardService: DashboardService) {
    this.cars = [
      {vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black'},
      {vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White'},
      {vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue'},
      {vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White'},
      {vin: 'gf45wg5', year: 2011, brand: 'VW', color: 'Red'},
      {vin: 'bhv5y5w', year: 2015, brand: 'Jaguar', color: 'Blue'},
      {vin: 'ybw5fsd', year: 2012, brand: 'Ford', color: 'Yellow'},
      {vin: '45665e5', year: 2011, brand: 'Mercedes', color: 'Brown'},
      {vin: 'he6sb5v', year: 2015, brand: 'Ford', color: 'Black'}
    ];
  }

  ngOnInit() {
    this.battingRecords();
  }

  battingRecords() {
    console.info("Fetching battingRecords list: ")
    const types$ = this.dashboardService.getBattingRecords();
    types$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.battingRecordsList = responce,
      (err) => console.error('battingRecords: Response Error =>', err),
      () => this.loadData(this.battingRecordsList));

  }

  loadData(val) {
    console.log("Value: ", val);
    this.cars = [
      {vin: val[0].matches, year: val[0].runs, brand: val[0].average, color: val[0].fifties, price:val[0].playerFullName },
      {vin: val[1].matches, year: val[1].runs, brand: val[1].average, color: val[1].fifties, price:val[1].playerFullName },
      {vin: val[2].matches, year: val[2].runs, brand: val[2].average, color: val[2].fifties, price:val[2].playerFullName},
      {vin: val[3].matches, year: val[3].runs, brand: val[3].average, color: val[3].fifties, price:val[3].playerFullName},
      {vin: val[4].matches, year: val[4].runs, brand: val[4].average, color: val[4].fifties, price:val[4].playerFullName},
      {vin: val[5].matches, year: val[5].runs, brand: val[5].average, color: val[5].fifties, price:val[5].playerFullName},
      {vin: val[6].matches, year: val[6].runs, brand: val[6].average, color: val[6].fifties, price:val[6].playerFullName},
      {vin: val[7].matches, year: val[7].runs, brand: val[7].average, color: val[7].fifties, price:val[7].playerFullName},
      {vin: val[8].matches, year: val[8].runs, brand: val[8].average, color: val[8].fifties, price:val[8].playerFullName},
      {vin: val[9].matches, year: val[9].runs, brand: val[9].average, color: val[9].fifties, price:val[9].playerFullName}
    ];
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}

