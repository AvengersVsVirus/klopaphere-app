import { Action, createReducer } from "@ngrx/store";

export interface DemandState {}

export const initialState: DemandState = {};

export const reducer = createReducer(initialState);

export function demandReducer(state: DemandState, action: Action) {
  return reducer(state, action);
}
