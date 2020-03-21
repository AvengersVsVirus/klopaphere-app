import {IonicModule} from '@ionic/angular';
import {NgModule, Input} from '@angular/core';
import {SupplyListItemComponent} from './supply-list-item.component';

@NgModule({
  imports: [
    IonicModule
  ],
  exports: [
    SupplyListItemComponent
  ],
  declarations: [SupplyListItemComponent]
})
export class SupplyListItemModule {

  icon = '';
  text = '';
}

