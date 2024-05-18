import { Component } from "@angular/core";
import { ViewBalanceComponent } from "../view-balance/view-balance.component";

@Component({
  selector: "app-monthly-view",
  standalone: true,
  imports: [ViewBalanceComponent],
  templateUrl: "./monthly-view.component.html",
  styleUrl: "./monthly-view.component.scss",
})
export class MonthlyViewComponent {}
