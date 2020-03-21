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

export interface State {
  demands: DemandState;
}

export const reducers: ActionReducerMap<State> = {
  demands: demandReducer
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
    EffectsModule.forRoot([DemandEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  exports: [NgrxStoreModule]
})
export class StoreModule {}
