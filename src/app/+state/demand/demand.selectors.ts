import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DemandState } from "./demand.reducer";

const getState = createFeatureSelector("demands");
const getProducts = createSelector(
  getState,
  (state: DemandState) => state.products
);
export const fromDemands = {
  getProducts
};
