import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Products, Product } from "src/app/+state/demand/demand.model";

@Component({
  selector: "demand-list",
  templateUrl: "./demand-list.component.html",
  styleUrls: ["./demand-list.component.scss"]
})
export class DemandListComponent {
  @Input()
  products: Products;

  @Output()
  select: EventEmitter<Product> = new EventEmitter<Product>();

  currentDemandFilter: boolean;

  demandFilter() {
    this.currentDemandFilter = true;
  }

  onSelect(product: Product) {
    this.select.emit(product);
  }
}
