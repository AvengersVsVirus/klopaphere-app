import {Component, Input} from '@angular/core';

@Component({
    selector: 'supply-button',
    templateUrl: './supply-button.component.html',
    styleUrls: ['./supply-button.component.scss'],
})
export class SupplyButtonComponent {
    constructor() {
    }

    @Input() label: string;
    @Input() icon: string;
}
