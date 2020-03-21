import {IonicModule} from '@ionic/angular';
import {NgModule, Input} from '@angular/core';
import {SupplyButtonGroupComponent} from './supply-button-group.component';

@NgModule({
  imports: [
    IonicModule
  ],
  exports: [
    SupplyButtonGroupComponent
  ],
  declarations: [SupplyButtonGroupComponent]
})
export class SupplyButtonGroupModule {

}

