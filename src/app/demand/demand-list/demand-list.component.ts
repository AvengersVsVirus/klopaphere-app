import { Component, Input, Output } from "@angular/core";
import { Products } from "src/app/+state/demand/demand.model";

@Component({
  selector: "demand-list",
  templateUrl: "./demand-list.component.html",
  styleUrls: ["./demand-list.component.scss"]
})
export class DemandListComponent {
  @Input()
  products: Products;

  @Output()
  currentDemandFilter: boolean;

  demandFilter() {
    this.currentDemandFilter = true;
  }
}
