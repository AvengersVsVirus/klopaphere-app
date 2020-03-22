import { Component, OnInit } from "@angular/core";
import { SupplyFacade } from "../+state/supply/supply.facade";
import { Observable } from "rxjs";
import { Votings, SupplyLocation, PostVoting, Voting } from "../+state";

@Component({
  selector: "app-supply",
  templateUrl: "supply.page.html",
  styleUrls: ["supply.page.scss"]
})
export class SupplyPage implements OnInit {
  votings$: Observable<Votings> = this.facade.votings$;

  location$: Observable<SupplyLocation> = this.facade.location$;

  constructor(private facade: SupplyFacade) {}
  ngOnInit(): void {
    this.facade.loadVotings();
    this.facade.loadLocation();
  }

  onVote(voting: PostVoting) {
    this.facade.vote(voting);
  }

  onSelect(voting: Voting) {
    this.facade.selectVote(voting);
  }
}
