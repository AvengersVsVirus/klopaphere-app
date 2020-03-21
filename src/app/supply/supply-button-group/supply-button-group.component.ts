import {Component, Input} from '@angular/core';

@Component({
    selector: 'supply-button-group',
    templateUrl: './supply-button-group.component.html',
    styleUrls: ['./supply-button-group.component.scss'],
})
export class SupplyButtonGroupComponent {
    constructor() {
    }

    @Input() label: string;
    @Input() icon: string;
}
