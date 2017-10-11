/* tslint:disable */
import {Component} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {ClubsService} from "../../clubs.service";

@Component({
  selector: "ctcl-clubs-page",
  templateUrl: "./clubs.page.html",
  // styleUrls: ['./clubs.page.scss'],
  // providers : [MessageService],
})

export class ClubsPageComponent {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  clubs: any;
  data: any;
  clubMap = new Map<string, Map<string, string>>();
  clubChild = new Map<string, string>();
  parents: any[] = [];
  clubChildren: any = [];
  ctcl: any[] = [];
  clubTeamsList: any[];
  private ctclOrder = new Subject<ctclTree>();

  rrccClub: any = [];
  rrccClubTeams: any[] = [];
  acaClub: any[] = [];
  acaClubTeams: any[] = [];
  hcaClub: any[] = [];
  hcaClubTeams: any[] = [];

  constructor(private clubsService: ClubsService) {

  }

  ngOnInit() {
    this.clubsList();
  }


  clubsList() {
    console.info("Fetching clubs list: ")
    const types$ = this.clubsService.getClubLists();
    types$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.clubs = responce,
      (err) => console.error('battingRecords: Response Error =>', err),
      () => this.requestCompleted2());
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }


  requestCompleted2() {
    let expanded = true;
    let rrcc = "Round Rock Cricket Club";
    let aca = "Austin Cricket Association (ACA)";
    let hca = "Hill Country Cricket Association";
    for (let club of this.clubs) {
      if (rrcc === club.club_name) {
        this.rrccClubTeams.push({label: club.team_abbrev});
      } else if (aca === club.club_name) {
        this.acaClubTeams.push({label: club.team_abbrev});
      } else if (hca === club.club_name) {
        this.hcaClubTeams.push({label: club.team_abbrev});

      }
    }
    this.acaClubTeams.push({children: [{label: rrcc, expanded: expanded, children: this.rrccClubTeams}]});
    this.rrccClub.push(
      {
        label: "CTCL",
        expanded: true,
        children: [{label: rrcc, expanded: expanded, children: this.rrccClubTeams}]
      });
    this.acaClub.push({label: aca, expanded: expanded, children: this.acaClubTeams});
    this.hcaClub.push({label: hca, expanded: expanded, children: this.hcaClubTeams});
    this.ctcl.push({label: "CTCL", expanded: true, children: [this.rrccClub, this.acaClub, this.hcaClub]})
   console.log("The ACC acaClubTeams ", JSON.stringify(this.acaClubTeams));
  }


}

interface ctclTree {
  label?: string;
  expanded?: boolean;
  children?: string[];

}

interface clubChildren {
  label?: string;

}
