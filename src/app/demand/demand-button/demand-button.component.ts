import {Component, Input} from '@angular/core';


@Component({
    selector: 'demand-button',
    templateUrl: './demand-button.component.html',
    styleUrls: ['./demand-button.component.scss'],
})
export class DemandButtonComponent {
    @Input() currentDemandFilter: any;

    constructor() {
    }

    onDemandCheck() {

        console.log();

    }

}
