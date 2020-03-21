import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DemandPage} from './demand.page';
import {DemandListModule} from './demand-list/demand-list.module';
import {DemandButtonModule} from './demand-button/demand-button.module';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        DemandListModule,
        DemandButtonModule,
        ExploreContainerComponentModule,
        RouterModule.forChild([{path: '', component: DemandPage}])
    ],
    declarations: [DemandPage]
})
export class DemandPageModule {
}

