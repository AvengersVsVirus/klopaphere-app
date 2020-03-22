import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PostVoting, Voting, VotingOption} from "../../../+state";

@Component({
    selector: 'demand-list-item',
    templateUrl: './demand-list-item.component.html',
    styleUrls: ['./demand-list-item.component.scss'],
})
export class DemandListItemComponent {

    @Input()
    voting: Voting;

    @Input()
    enabled: boolean;

    @Output()
    vote: EventEmitter<PostVoting> = new EventEmitter<PostVoting>();

}
