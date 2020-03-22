import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { DefaultService } from "src/app/shared/api";
import { SupplyActions } from "./supply.actions";
import { map, mergeMap, withLatestFrom, catchError, tap } from "rxjs/operators";
import { SupplyState } from "./supply.reducer";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { fromSupply } from "./supply.selectors";

@Injectable()
export class SupplyEffects {
  loadVotings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SupplyActions.loadVotings),
      mergeMap(() =>
        this.service.productGet().pipe(
          map(votings => SupplyActions.votingsLoaded({ payload: votings })),
          catchError(error =>
            of(SupplyActions.loadVotingsFailed({ error: error }))
          )
        )
      )
    )
  );

  loadLocation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SupplyActions.loadLocation),
      map(() =>
        SupplyActions.locationLoaded({
          payload: {
            name: "Dummy Store",
            longitude: 53.6159766,
            latitude: 9.9022919
          }
        })
      )
    )
  );

  vote$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SupplyActions.vote),
      withLatestFrom(this.store.select(fromSupply.getLocation)),
      map(([{ payload }, { latitude, longitude }]) => ({
        availability: payload.chosenOption,
        location: `${latitude},${longitude}`,
        product: payload.voting.name
      })),
      tap(console.log),
      mergeMap(vote =>
        this.service.votePost(vote).pipe(
          map(vote => SupplyActions.voted({ payload: vote.product })),
          catchError(error => of(SupplyActions.voteFailed({ error: error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<SupplyState>,
    private service: DefaultService
  ) {}
}
