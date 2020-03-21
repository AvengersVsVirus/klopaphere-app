import { Injectable } from "@angular/core";
import { Store, StoreModule } from "@ngrx/store";
import { DemandState } from "./demand.reducer";

@Injectable({ providedIn: StoreModule })
export class DemandFacade {
  constructor(private store: Store<DemandState>) {}
}
