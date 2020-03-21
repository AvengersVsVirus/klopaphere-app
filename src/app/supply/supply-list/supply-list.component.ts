import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Votings, SupplyLocation, Voting, PostVoting } from "src/app/+state";

@Component({
  selector: "supply-list",
  templateUrl: "./supply-list.component.html",
  styleUrls: ["./supply-list.component.scss"]
})
export class SupplyListComponent {
  @Input()
  votings: Votings;

  @Input()
  location: SupplyLocation;

  @Output()
  vote: EventEmitter<PostVoting> = new EventEmitter<PostVoting>();

  isVotingEnabled(index: number) {
    return index === 0;
  }

  onVote(voting: PostVoting) {
    this.vote.emit(voting);
  }
}
