import { Component } from "@angular/core";
import { SupplyFacade } from "../+state/supply/supply.facade";
import { Observable } from "rxjs";
import { Votings, SupplyLocation, PostVoting } from "../+state";

@Component({
  selector: "app-supply",
  templateUrl: "supply.page.html",
  styleUrls: ["supply.page.scss"]
})
export class SupplyPage {
  votings$: Observable<Votings> = this.facade.votings$;

  location$: Observable<SupplyLocation> = this.facade.location$;

  constructor(private facade: SupplyFacade) {
    this.facade.loadVotings();
    this.facade.loadLocation();
  }

  onVote(voting: PostVoting) {
    this.facade.vote(voting);
  }
}
