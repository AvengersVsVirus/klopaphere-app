import { createFeatureSelector } from "@ngrx/store";

const getState = createFeatureSelector("demands");

export const fromDemands = {
  getState
};
