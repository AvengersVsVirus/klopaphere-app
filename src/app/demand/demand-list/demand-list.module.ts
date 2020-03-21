import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {DemandListComponent} from './demand-list.component';
import {DemandListItemModule} from "./demand-list-item/demand-list-item.module";

@NgModule({
    imports: [
        IonicModule,
        DemandListItemModule
    ],
    exports: [
        DemandListComponent
    ],
    declarations: [DemandListComponent]
})
export class DemandListModule {
}

