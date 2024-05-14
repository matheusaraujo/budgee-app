import { Component, OnInit } from "@angular/core";
import { TableModule } from "primeng/table";
import { CommonModule } from "@angular/common";
import { TransactionsService } from "../transactions.service";

@Component({
  selector: "app-list-transactions",
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: "./list-transactions.component.html",
  styleUrl: "./list-transactions.component.scss",
})
export class ListTransactionsComponent implements OnInit {
  transactions!: any[];

  constructor(private service: TransactionsService) {}

  ngOnInit() {
    this.service.getTransactions().subscribe((response) => {
      this.transactions = response as [];
    });
  }
}
