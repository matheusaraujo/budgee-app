import { Component } from "@angular/core";

import { ViewBalanceComponent } from "../view-balance/view-balance.component";

@Component({
  selector: "app-yearly-view",
  standalone: true,
  imports: [ViewBalanceComponent],
  templateUrl: "./yearly-view.component.html",
  styleUrl: "./yearly-view.component.scss",
})
export class YearlyViewComponent {}
