import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {DemandListComponent} from './demand-list.component';
import {DemandListItemModule} from './demand-list-item/demand-list-item.module';
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        IonicModule,
        DemandListItemModule,
        CommonModule
    ],
    exports: [
        DemandListComponent
    ],
    declarations: [DemandListComponent]
})
export class DemandListModule {
    DemandItems: any[] = [
        {title: 'Item 1', icon: 'trash'},
        {title: 'Item 1', icon: 'trash'},
        {title: 'Item 1', icon: 'trash'},
        {title: 'Item 1', icon: 'trash'},
        {title: 'Item 1', icon: 'trash'}
    ];
}

