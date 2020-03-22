import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PostVoting, SupplyLocation, Votings} from '../../+state';

@Component({
    selector: 'demand-list',
    templateUrl: './demand-list.component.html',
    styleUrls: ['./demand-list.component.scss'],
})
export class DemandListComponent {
    @Input()
    votings: Votings;

    @Output()
    currentDemandFilter: boolean;

    demandFilter() {
        this.currentDemandFilter = true;
    }

}
