import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  StoreModule as NgrxStoreModule,
  ActionReducerMap,
  MetaReducer
} from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../../environments/environment";
import { DemandState, demandReducer } from "./demand/demand.reducer";
import { DemandEffects } from "./demand/demand.effects";
import { supplyReducer, SupplyState } from "./supply/supply.reducer";
import { SupplyEffects } from "./supply/supply.effects";
import { ApiModule } from "../shared/api";
import { HttpClientModule } from "@angular/common/http";

export interface State {
  demands: DemandState;
  supplies: SupplyState;
}

export const reducers: ActionReducerMap<State> = {
  demands: demandReducer,
  supplies: supplyReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgrxStoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([DemandEffects, SupplyEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    ApiModule,
    HttpClientModule
  ],
  exports: [NgrxStoreModule]
})
export class StoreModule {}
