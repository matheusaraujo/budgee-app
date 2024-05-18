import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { CardModule } from "primeng/card";
import { TabViewModule } from "primeng/tabview";

import { CreateTransactionComponent } from "./create-transaction/create-transaction.component";
import { ListCategoriesComponent } from "./list-categories/list-categories.component";
import { ListDatesComponent } from "./list-dates/list-dates.component";
import { ListTransactionsComponent } from "./list-transactions/list-transactions.component";
import { MenuComponent } from "./menu/menu.component";
import { ViewBalanceComponent } from "./view-balance/view-balance.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    CardModule,
    TabViewModule,
    CreateTransactionComponent,
    ListCategoriesComponent,
    ListTransactionsComponent,
    ListDatesComponent,
    MenuComponent,
    ViewBalanceComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {}
