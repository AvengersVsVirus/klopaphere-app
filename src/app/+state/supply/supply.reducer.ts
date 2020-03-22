import { Action, createReducer, on } from "@ngrx/store";
import { Votings, SupplyLocation } from "./supply.model";
import { SupplyActions } from "./supply.actions";
import { State } from "../store.module";

export interface SupplyState {
  location: SupplyLocation;
  votings: Votings;
}

export const initialState: SupplyState = {
  location: null,
  votings: []
};

const reducer = createReducer(
  initialState,
  on(SupplyActions.votingsLoaded, (state, action) => ({
    ...state,
    votings: action.payload
  })),
  on(SupplyActions.locationLoaded, (state, action) => ({
    ...state,
    location: action.payload
  })),
  on(SupplyActions.voted, (state, { payload: removeVotingName }) => {
    return {
      ...state,
      votings: [
        ...state.votings.filter(voting => voting.name !== removeVotingName)
      ]
    };
  })
);

export function supplyReducer(state: SupplyState, action: Action) {
  return reducer(state, action);
}
