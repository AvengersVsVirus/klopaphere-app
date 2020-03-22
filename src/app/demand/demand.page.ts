import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DemandFacade } from "../+state/demand/demand.facade";
import { Products, Product } from "../+state/demand/demand.model";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-demand",
  templateUrl: "demand.page.html",
  styleUrls: ["demand.page.scss"]
})
export class DemandPage implements OnInit {
  products$: Observable<Products> = this.facade.products$;

  constructor(private facade: DemandFacade) {}

  onSelect(product: Product) {
    this.facade.selectProduct(product);
  }

  ngOnInit(): void {
    this.facade.loadProducts();
  }
}
