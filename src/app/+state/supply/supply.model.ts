import { Availability } from "../../shared/api";

export interface Voting {
  name: string;
  availability?: Availability;
}

export type Votings = Voting[];

export interface SupplyLocation {
  name: string;
  longitude: number;
  latitude: number;
}
