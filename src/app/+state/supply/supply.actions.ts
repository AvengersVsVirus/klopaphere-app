import { createAction, props } from "@ngrx/store";
import { Votings, SupplyLocation, Voting, PostVoting } from "./supply.model";
import { ActionPayload, ErrorPayload } from "src/app/shared/store/action.model";

const loadVotings = createAction("[Supply] Load Votings");

const votingsLoaded = createAction(
  "[Supply] Votings Loaded",
  props<ActionPayload<Votings>>()
);

const loadVotingsFailed = createAction(
  "[Supply] Load Votings Failed",
  props<ErrorPayload>()
);

const loadLocation = createAction("[Supply] Load Location");

const locationLoaded = createAction(
  "[Supply] Location Loaded",
  props<ActionPayload<SupplyLocation>>()
);

const loadLocationFailed = createAction(
  "[Supply] Load Location Failed",
  props<ErrorPayload>()
);

const vote = createAction("[Supply] Vote", props<ActionPayload<PostVoting>>());

const voted = createAction("[Supply] Voted", props<ActionPayload<string>>());

const voteFailed = createAction("[Supply] Vote Failed", props<ErrorPayload>());

const selectVote = createAction(
  "[Supply] Select Vote",
  props<ActionPayload<Voting>>()
);

export const SupplyActions = {
  loadVotings,
  votingsLoaded,
  loadVotingsFailed,
  loadLocation,
  locationLoaded,
  loadLocationFailed,
  vote,
  voted,
  voteFailed,
  selectVote
};
