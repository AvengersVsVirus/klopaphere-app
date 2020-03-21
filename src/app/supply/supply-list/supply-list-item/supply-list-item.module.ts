import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { SupplyListItemComponent } from "./supply-list-item.component";
import { CommonModule } from "@angular/common";
import { SupplyButtonModule } from "./supply-button/supply-button.module";

@NgModule({
  imports: [CommonModule, IonicModule, SupplyButtonModule],
  exports: [SupplyListItemComponent],
  declarations: [SupplyListItemComponent]
})
export class SupplyListItemModule {}
