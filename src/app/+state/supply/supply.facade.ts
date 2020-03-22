import { Injectable } from "@angular/core";
import { SupplyState } from "./supply.reducer";
import { StoreModule } from "../store.module";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { SupplyActions } from "./supply.actions";
import { Votings, SupplyLocation, Voting, PostVoting } from "./supply.model";
import { fromSupply } from "./supply.selectors";

@Injectable({ providedIn: StoreModule })
export class SupplyFacade {
  location$: Observable<SupplyLocation> = this.store.select(
    fromSupply.getLocation
  );

  votings$: Observable<Votings> = this.store.select(fromSupply.getVotings);

  constructor(private store: Store<SupplyState>) {}

  loadVotings() {
    this.store.dispatch(SupplyActions.loadVotings());
  }

  loadLocation() {
    this.store.dispatch(SupplyActions.loadLocation());
  }

  vote(voting: PostVoting) {
    this.store.dispatch(
      SupplyActions.vote({
        payload: voting
      })
    );
  }

  selectVote(voting: Voting) {
    this.store.dispatch(SupplyActions.selectVote({ payload: voting }));
  }
}
