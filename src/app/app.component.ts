import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { CreateTransactionComponent } from "./create-transaction/create-transaction.component";
import { ListCategoriesComponent } from "./list-categories/list-categories.component";
import { ListDatesComponent } from "./list-dates/list-dates.component";
import { ListTransactionsComponent } from "./list-transactions/list-transactions.component";
import { MenuComponent } from "./menu/menu.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    CreateTransactionComponent,
    ListCategoriesComponent,
    ListTransactionsComponent,
    ListDatesComponent,
    MenuComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {}
