import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DemandFacade } from "../+state/demand/demand.facade";
import { Products } from "../+state/demand/demand.model";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-demand",
  templateUrl: "demand.page.html",
  styleUrls: ["demand.page.scss"]
})
export class DemandPage implements OnInit {
  products$: Observable<Products> = this.facade.products$.pipe(
    tap(console.log)
  );

  constructor(private facade: DemandFacade) {}

  ngOnInit(): void {
    this.facade.loadProducts();
  }
}
