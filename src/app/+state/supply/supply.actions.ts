import { createAction, props } from "@ngrx/store";
import { Votings, SupplyLocation, Voting } from "./supply.model";
import { ActionPayload, ErrorPayload } from "src/app/shared/store/action.model";

const loadVotings = createAction("[Suply] Load Votings");

const votingsLoaded = createAction(
  "[Suply] Votings Loaded",
  props<ActionPayload<Votings>>()
);

const loadVotingsFailed = createAction(
  "[Suply] Load Votings Failed",
  props<ErrorPayload>()
);

const loadLocation = createAction("[Suply] Load Location");

const locationLoaded = createAction(
  "[Suply] Location Loaded",
  props<ActionPayload<SupplyLocation>>()
);

const loadLocationFailed = createAction(
  "[Suply] Load Location Failed",
  props<ErrorPayload>()
);

const vote = createAction("[Suply] Vote", props<ActionPayload<Voting>>());

const voted = createAction("[Suply] Voted", props<ActionPayload<Voting>>());

const voteFailed = createAction("[Suply] Vote Failed", props<ErrorPayload>());

export const SupplyActions = {
  loadVotings,
  votingsLoaded,
  loadVotingsFailed,
  loadLocation,
  locationLoaded,
  loadLocationFailed,
  vote,
  voted,
  voteFailed
};
