import { Component } from "@angular/core";
import { GetBalanceComponent } from "@app/balance/get-balance/get-balance.component";
import { GetDetailedBalanceComponent } from "@app/balance/get-detailed-balance/get-detailed-balance.component";
import { TabViewModule } from "primeng/tabview";

@Component({
  selector: "app-monthly-view",
  standalone: true,
  imports: [TabViewModule, GetBalanceComponent, GetDetailedBalanceComponent],
  templateUrl: "./monthly-view.component.html",
  styleUrl: "./monthly-view.component.scss",
})
export class MonthlyViewComponent {}
