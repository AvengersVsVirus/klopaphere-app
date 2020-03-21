import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {DemandListComponent} from './demand-list.component';

@NgModule({
    imports: [
        IonicModule
    ],
    exports: [
        DemandListComponent
    ],
    declarations: [DemandListComponent]
})
export class DemandListModule {
}

