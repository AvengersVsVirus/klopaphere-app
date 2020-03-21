import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SupplyState } from "./supply.reducer";

const getState = createFeatureSelector("supplies");
const getVotings = createSelector(
  getState,
  (state: SupplyState) => state.votings
);
const getLocation = createSelector(
  getState,
  (state: SupplyState) => state.location
);
export const fromSupply = {
  getVotings,
  getLocation
};
