import { Availability } from "../../shared/api";

export interface VotingOption {
  label: string;
  value: Availability;
}

export type VotingOptions = VotingOption[];

export interface Voting {
  name: string;
  options: VotingOptions;
}

export type Votings = Voting[];

export interface SupplyLocation {
  name: string;
  longitude: number;
  latitude: number;
}

export interface PostVoting {
  voting: Voting;
  chosenOption: Availability;
}
