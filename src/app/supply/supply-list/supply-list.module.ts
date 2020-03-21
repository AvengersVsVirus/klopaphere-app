import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {SupplyListComponent} from './supply-list.component';
import {SupplyListItemModule} from './supply-list-item/supply-list-item.module';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        IonicModule,
        SupplyListItemModule,
        CommonModule
    ],
    exports: [
        SupplyListComponent
    ],
    declarations: [SupplyListComponent]
})
export class SupplyListModule {

}

