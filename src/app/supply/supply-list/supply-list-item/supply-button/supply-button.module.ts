import { IonicModule } from "@ionic/angular";
import { NgModule, Input } from "@angular/core";
import { SupplyButtonComponent } from "./supply-button.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule, IonicModule],
  exports: [SupplyButtonComponent],
  declarations: [SupplyButtonComponent]
})
export class SupplyButtonModule {}
