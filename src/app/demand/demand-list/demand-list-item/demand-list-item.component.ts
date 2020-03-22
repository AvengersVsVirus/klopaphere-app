import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "src/app/+state/demand/demand.model";

@Component({
  selector: "demand-list-item",
  templateUrl: "./demand-list-item.component.html",
  styleUrls: ["./demand-list-item.component.scss"]
})
export class DemandListItemComponent {
  @Input()
  product: Product;

  @Output()
  select: EventEmitter<Product> = new EventEmitter<Product>();

  onToggle() {
    this.select.emit(this.product);
  }
}
