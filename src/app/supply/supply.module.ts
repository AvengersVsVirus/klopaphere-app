import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SupplyPage} from './supply.page';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';
import {SupplyListModule} from './supply-list/supply-list.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        RouterModule.forChild([{path: '', component: SupplyPage}]),
        SupplyListModule
    ],
    declarations: [SupplyPage]
})
export class SupplyPageModule {
}

