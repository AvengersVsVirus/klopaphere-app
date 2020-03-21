import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { DefaultService, Availability } from "src/app/shared/api";
import { SupplyActions } from "./supply.actions";
import { map, mergeMap, withLatestFrom, catchError } from "rxjs/operators";
import { SupplyState } from "./supply.reducer";
import { Store } from "@ngrx/store";
import { SupplyFacade } from "./supply.facade";
import { of } from "rxjs";
import { fromSupply } from "./supply.selectors";

@Injectable()
export class SupplyEffects {
  loadVotings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SupplyActions.loadVotings),
      map(() =>
        SupplyActions.votingsLoaded({
          payload: [
            {
              name: "Shop",
              options: [
                {
                  label: "leer",
                  value: Availability.MUCH
                },
                {
                  label: "fast nix",
                  value: Availability.NORMAL
                },
                {
                  label: "voll",
                  value: Availability.NOTHING
                }
              ]
            },
            {
              name: "Klopapier",
              options: [
                {
                  label: "viel da",
                  value: Availability.MUCH
                },
                {
                  label: "fast nix",
                  value: Availability.NORMAL
                },
                {
                  label: "leet",
                  value: Availability.NOTHING
                }
              ]
            }
          ]
        })
      )
    )
  );

  loadLocation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SupplyActions.loadLocation),
      map(() =>
        SupplyActions.locationLoaded({
          payload: {
            name: "Edeka",
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
        availability: payload.chosenOption.value,
        location: `${latitude},${longitude}`,
        product: payload.voting.name
      })),
      mergeMap(vote =>
        this.service.votePost(vote).pipe(
          map(vote => SupplyActions.voted({ payload: null })),
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
