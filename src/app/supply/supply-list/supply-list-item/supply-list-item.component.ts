import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Voting, VotingOption, PostVoting } from "src/app/+state";
import { Availability } from "src/app/shared/api";

const availabiltyToTypeMap = {
  [Availability.MUCH]: "success",
  [Availability.NORMAL]: "warning",
  [Availability.LITTLE]: "warning",
  [Availability.NOTHING]: "danger"
};

@Component({
  selector: "supply-list-item",
  templateUrl: "./supply-list-item.component.html",
  styleUrls: ["./supply-list-item.component.scss"]
})
export class SupplyListItemComponent {
  @Input()
  voting: Voting;

  @Input()
  enabled: boolean;

  @Output()
  vote: EventEmitter<PostVoting> = new EventEmitter<PostVoting>();

  getTypeOfOption(option: VotingOption) {
    return availabiltyToTypeMap[option.value];
  }

  onVote(option) {
    this.vote.emit({
      voting: this.voting,
      chosenOption: option
    });
  }
}
