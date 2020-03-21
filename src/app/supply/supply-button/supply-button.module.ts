import {IonicModule} from '@ionic/angular';
import {NgModule, Input} from '@angular/core';
import {SupplyButtonComponent} from './supply-button.component';

@NgModule({
  imports: [
    IonicModule
  ],
  exports: [
    SupplyButtonComponent
  ],
  declarations: [SupplyButtonComponent]
})
export class SupplyButtonModule {

}

