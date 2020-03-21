import {IonicModule} from '@ionic/angular';
import {NgModule, Input} from '@angular/core';
import {SupplyButtonGroupComponent} from './supply-button-group.component';
import {SupplyButtonModule} from "../supply-button/supply-button.module";

@NgModule({
  imports: [
    IonicModule,
    SupplyButtonModule
  ],
  exports: [
    SupplyButtonGroupComponent
  ],
  declarations: [SupplyButtonGroupComponent]
})
export class SupplyButtonGroupModule {

}

