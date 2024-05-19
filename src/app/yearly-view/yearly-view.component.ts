import { Component } from "@angular/core";

import { GetBalanceComponent } from "../get-balance/get-balance.component";

@Component({
  selector: "app-yearly-view",
  standalone: true,
  imports: [GetBalanceComponent],
  templateUrl: "./yearly-view.component.html",
  styleUrl: "./yearly-view.component.scss",
})
export class YearlyViewComponent {}
