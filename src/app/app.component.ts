import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ListCategoriesComponent } from "./list-categories/list-categories.component";
import { CreateTransactionComponent } from "./create-transaction/create-transaction.component";
import { MatTabsModule } from "@angular/material/tabs";
import { ListTransactionsComponent } from "./list-transactions/list-transactions.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    MatTabsModule,
    ListCategoriesComponent,
    ListTransactionsComponent,
    CreateTransactionComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "budgee-app";
}
