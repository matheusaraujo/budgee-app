import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ListCategoriesComponent } from "./list-categories/list-categories.component";
import { CreateTransactionComponent } from "./create-transaction/create-transaction.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, ListCategoriesComponent, CreateTransactionComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "budgee-app";
}
