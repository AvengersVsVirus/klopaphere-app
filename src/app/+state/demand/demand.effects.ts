import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DemandActions } from "../demand/demand.actions";
import { mergeMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { DefaultService } from "src/app/shared/api";

function toDemandProducts(products) {
  return products.map(product => ({
    name: product.name,
    isSelected: false
  }));
}

@Injectable()
export class DemandEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DemandActions.loadProdcuts),
      mergeMap(() =>
        this.service.productGet().pipe(
          map(products => toDemandProducts(products)),
          map(products => DemandActions.productsLoaded({ payload: products })),
          catchError(error =>
            of(DemandActions.loadProdcutsFailed({ error: error }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: DefaultService) {}
}
