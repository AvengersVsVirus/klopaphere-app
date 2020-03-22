import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {DemandListComponent} from './demand-list.component';
import {DemandListItemModule} from './demand-list-item/demand-list-item.module';
import {CommonModule} from '@angular/common';
import {DemandButtonModule} from "../demand-button/demand-button.module";

@NgModule({
    imports: [
        IonicModule,
        DemandListItemModule,
        CommonModule,
        DemandButtonModule
    ],
    exports: [
        DemandListComponent
    ],
    declarations: [DemandListComponent]
})
export class DemandListModule {

}

