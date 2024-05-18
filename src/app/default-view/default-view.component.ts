import { Component } from "@angular/core";
import { ViewBalanceComponent } from "../view-balance/view-balance.component";

@Component({
  selector: "app-default-view",
  standalone: true,
  imports: [ViewBalanceComponent],
  templateUrl: "./default-view.component.html",
  styleUrl: "./default-view.component.scss",
})
export class DefaultViewComponent {}
