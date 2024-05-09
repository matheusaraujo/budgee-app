import { Component } from "@angular/core";
import { TransactionsService } from "../transactions.service";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";

type Category = {
  category: string;
  amount: number;
};

@Component({
  selector: "app-list-categories",
  standalone: true,
  imports: [CommonModule, MatTableModule],
  providers: [TransactionsService],
  templateUrl: "./list-categories.component.html",
  styleUrl: "./list-categories.component.scss",
})
export class ListCategoriesComponent {
  categories: Category[] = [];
  displayedColumns: string[] = ["category", "amount"];

  constructor(private service: TransactionsService) {}

  ngOnInit(): void {
    this.service.getTransactionsByCategory().subscribe((response) => {
      this.categories = response as Category[];
    });
  }
}
