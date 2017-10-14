/* tslint:disable */
import {Component} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {ClubsService} from "../../clubs.service";

@Component({
  selector: "ctcl-clubs-page",
  templateUrl: "./clubs.page.html",
  //styleUrls: ['../../clubs.scss'],
  // providers : [MessageService],
})

export class ClubsPageComponent {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  clubs: any;
  roles: any
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

  rrcc_name = "Round Rock Cricket Club";
  president: any;
  vice_president: any;
  secretary: any;
  treasurer: any;

  hca_name = "Hill Country Cricket Association";
  aca_name = "Austin Cricket Association (ACA)";
  tree: any = {
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
    this.clubsList();
    //this.playersRole();
  }

  clubsList() {
    console.info("Fetching clubs list: ")
    const types$ = this.clubsService.getClubLists();
    types$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.clubs = responce,
      (err) => console.error('getClubLists: Response Error =>', err),
      () => this.requestCompleted());
  }

  playersRole() {
    console.info("Fetching clubs list: ")
    const types$ = this.clubsService.getPlayersRoles();
    types$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.roles = responce,
      (err) => console.error('getPlayersRoles: Res Error =>', err),
      () => this.playersRoleReqCompleted());
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }


  requestCompleted() {
    this.playersRole();
    let expanded = true;

    let rrcc_id = 10;
    let aca_id = 8;
    let hca_id = 1;
    for (let club of this.clubs) {

      if (club.president_name) {
        this.president = club.president_name;
      }
      if (club.vice_president_name) {
        this.vice_president = club.vice_president_name;
      }
      if (club.secretary_name) {
        this.secretary = club.secretary_name;
      }
      if (club.treasurer_name) {
        this.treasurer = club.treasurer_name;
      }

      if (this.rrcc_name === club.club_name) {
        this.rrccClubTeams.push({
          label: club.team_abbrev,
          team_id: club.team_id,
          children: [{label: 'Captain', expanded: true, children: [{label: club.captain_name}]},
            {label: 'Vice Captain', expanded: true, children: [{label: club.vice_captain_name}]}]
        });
      } else if (this.aca_name === club.club_name) {
        this.acaClubTeams.push({
          label: club.team_abbrev,
          team_id: club.team_id,
          children: [{label: 'Captain', expanded: true, children: [{label: club.captain_name}]},
            {label: 'Vice Captain', expanded: true, children: [{label: club.vice_captain_name}]}]

        });
      } else if (this.hca_name === club.club_name) {
        this.hcaClubTeams.push({
          label: club.team_abbrev,
          team_id: club.team_id,
          children: [{label: 'Captain', expanded: true, children: [{label: club.captain_name}]},
            {label: 'Vice Captain', expanded: true, children: [{label: club.vice_captain_name}]}]
        });
      }
    }

    this.rrccClub.push({label: this.rrcc_name, club_id: rrcc_id, expanded: true, children: this.rrccClubTeams});
    this.acaClub.push({label: this.aca_name, club_id: aca_id, expanded: true, children: this.acaClubTeams});
    this.hcaClub.push({label: this.hca_name, club_id: hca_id, expanded: true, children: this.hcaClubTeams});
    this.ctcl.push({

      label: "Leagues Clubs",
      expanded: true,
      children: [{label: this.rrcc_name}, {label: this.hca_name}, {label: this.aca_name}]

    });

    /* {
       label: 'Organisers', expanded: true, children: [{label: 'President', children: [{label: this.president}]},
       {label: 'Vice President', children: [{label: this.vice_president}]},
       {label: 'Secretarty', children: [{label: this.secretary}]},
       {label: 'Treasurer', children: [{label: this.treasurer}]}]
     },*/
    console.log("The hcaClub ", JSON.stringify(this.hcaClub));
  }

  playersRoleReqCompleted() {
    console.log("Roles are ", this.roles);

  };
}

interface ctclTree {
  label?: string;
  expanded?: boolean;
  children?: string[];
}

interface clubChildren {
  label?: string;
}
