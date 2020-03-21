import {IonicModule} from '@ionic/angular';
import {NgModule, Input} from '@angular/core';
import {DemandListItemComponent} from './demand-list-item.component';

@NgModule({
  imports: [
    IonicModule
  ],
  exports: [
    DemandListItemComponent
  ],
  declarations: [DemandListItemComponent]
})
export class DemandListItemModule {

}

