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

  @Output()
  vote: EventEmitter<PostVoting> = new EventEmitter<PostVoting>();

  @Output()
  select: EventEmitter<Voting> = new EventEmitter<Voting>();

  getTypeOfOption(option: VotingOption) {
    return availabiltyToTypeMap[option.value];
  }

  onVote(option) {
    this.vote.emit({
      voting: this.voting,
      chosenOption: option
    });
  }

  onSelect() {
    this.select.emit(this.voting);
  }
}
