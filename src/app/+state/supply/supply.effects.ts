import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { DefaultService } from "src/app/shared/api";
import { SupplyActions } from "./supply.actions";
import { map } from "rxjs/operators";

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
              isVoted: false
            },
            {
              name: "Shop",
              isVoted: false
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

  constructor(private actions$: Actions, private service: DefaultService) {}
}
