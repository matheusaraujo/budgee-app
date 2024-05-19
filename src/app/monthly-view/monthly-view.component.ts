import { Component } from "@angular/core";
import { GetBalanceComponent } from "../get-balance/get-balance.component";

@Component({
  selector: "app-monthly-view",
  standalone: true,
  imports: [GetBalanceComponent],
  templateUrl: "./monthly-view.component.html",
  styleUrl: "./monthly-view.component.scss",
})
export class MonthlyViewComponent {}
