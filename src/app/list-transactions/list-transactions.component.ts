import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { TransactionsService } from "../transactions.service";
import { MatTableModule } from "@angular/material/table";

type Transaction = {
  category: string;
  description: string;
  date: Date;
  amount: number;
};

@Component({
  selector: "app-list-transactions",
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: "./list-transactions.component.html",
  styleUrl: "./list-transactions.component.scss",
})
export class ListTransactionsComponent {
  transactions: Transaction[] = [];
  displayedColumns: string[] = ["category", "date", "description", "amount"];

  constructor(private service: TransactionsService) {}

  ngOnInit(): void {
    this.service.getTransactions().subscribe((response) => {
      this.transactions = response as [];
    });
  }
}
