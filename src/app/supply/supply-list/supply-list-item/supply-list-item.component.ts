import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Voting } from "src/app/+state";

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
  vote: EventEmitter<Voting> = new EventEmitter<Voting>();

  onClick() {
    this.vote.emit(this.voting);
  }
}
