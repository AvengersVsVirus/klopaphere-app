import { Injectable } from "@angular/core";
import { Store, StoreModule } from "@ngrx/store";
import { DemandState } from "./demand.reducer";
import { DemandActions } from "./demand.actions";
import { Observable } from "rxjs";
import { Products, Product } from "./demand.model";
import { fromDemands } from "./demand.selectors";

@Injectable({ providedIn: StoreModule })
export class DemandFacade {
  products$: Observable<Products> = this.store.select(fromDemands.getProducts);

  constructor(private store: Store<DemandState>) {}

  loadProducts() {
    this.store.dispatch(DemandActions.loadProdcuts());
  }

  selectProduct(product: Product) {
    this.store.dispatch(DemandActions.selectProduct({ payload: product }));
  }
}
