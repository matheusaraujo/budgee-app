import { Component } from "@angular/core";
import { GetBalanceComponent } from "@app/balance/get-balance/get-balance.component";
import { GetDetailedBalanceComponent } from "@app/balance/get-detailed-balance/get-detailed-balance.component";
import { TabViewModule } from "primeng/tabview";

@Component({
  selector: "app-yearly-view",
  standalone: true,
  imports: [TabViewModule, GetBalanceComponent, GetDetailedBalanceComponent],
  templateUrl: "./yearly-view.component.html",
  styleUrl: "./yearly-view.component.scss",
})
export class YearlyViewComponent {}
