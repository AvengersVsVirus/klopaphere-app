import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {DemandMapComponent} from './demand-map.component';

@NgModule({
    imports: [
        IonicModule
    ],
    exports: [
        DemandMapComponent
    ],
    declarations: [DemandMapComponent]
})
export class DemandMapModule {
}

