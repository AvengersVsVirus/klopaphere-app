import { Action, createReducer, on } from "@ngrx/store";
import { Votings, SupplyLocation } from "./supply.model";
import { SupplyActions } from "./supply.actions";

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
        ...state.votings
          .filter(voting => voting.name !== removeVotingName)
          .map((voting, index) =>
            index === 0
              ? {
                  ...voting,
                  isSelected: true
                }
              : voting
          )
      ]
    };
  }),
  on(SupplyActions.selectVote, (state, action) => {
    return {
      ...state,
      votings: [
        ...state.votings.map(voting =>
          action.payload.name === voting.name
            ? {
                ...voting,
                isSelected: true
              }
            : {
                ...voting,
                isSelected: false
              }
        )
      ]
    };
  })
);

export function supplyReducer(state: SupplyState, action: Action) {
  return reducer(state, action);
}
