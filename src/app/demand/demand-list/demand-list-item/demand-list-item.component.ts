import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Voting} from '../../../+state';

@Component({
    selector: 'demand-list-item',
    templateUrl: './demand-list-item.component.html',
    styleUrls: ['./demand-list-item.component.scss'],
})
export class DemandListItemComponent {

    @Input()
    voting: Voting;


    @Output()
    currentDemandFilter: [''];

    onCurrentDemandFilter(e) {
        e.stopPropagation();
        e.target.classList.toggle('active');

        /*const tagName: any = e.target.tagName;
        this.currentDemandFilter.push(tagName);*/
    }
}
