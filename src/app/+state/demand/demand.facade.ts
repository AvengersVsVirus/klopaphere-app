import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { DemandState } from "./demand.reducer";

@Injectable()
export class DemandFacade {
  constructor(private store: Store<DemandState>) {}
}
