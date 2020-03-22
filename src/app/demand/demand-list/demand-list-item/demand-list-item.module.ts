import { IonicModule } from "@ionic/angular";
import { NgModule, Input } from "@angular/core";
import { DemandListItemComponent } from "./demand-list-item.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [IonicModule, CommonModule],
  exports: [DemandListItemComponent],
  declarations: [DemandListItemComponent]
})
export class DemandListItemModule {}
