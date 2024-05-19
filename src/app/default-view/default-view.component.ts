import { Component } from "@angular/core";
import { GetBalanceComponent } from "@app/balance/get-balance/get-balance.component";

@Component({
  selector: "app-default-view",
  standalone: true,
  imports: [GetBalanceComponent],
  templateUrl: "./default-view.component.html",
  styleUrl: "./default-view.component.scss",
})
export class DefaultViewComponent {}
