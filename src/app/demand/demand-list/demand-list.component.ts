import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PostVoting, SupplyLocation, Votings} from "../../+state";

@Component({
    selector: 'demand-list',
    templateUrl: './demand-list.component.html',
    styleUrls: ['./demand-list.component.scss'],
})
export class DemandListComponent {
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
