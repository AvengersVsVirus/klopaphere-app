import { Component, Input } from "@angular/core";

@Component({
  selector: "demand-map",
  templateUrl: "./demand-map.component.html",
  styleUrls: ["./demand-map.component.scss"]
})
export class DemandMapComponent {
  @Input() currentDemandFilter: any;

  constructor() {}

  onDemandCheck() {}
}
