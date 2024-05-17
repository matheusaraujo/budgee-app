import { Component, OnInit } from "@angular/core";
import { DataViewModule } from "primeng/dataview";
import { TableModule } from "primeng/table";
import { CommonModule } from "@angular/common";
import { TransactionsService } from "../transactions.service";

@Component({
  selector: "app-list-transactions",
  standalone: true,
  imports: [TableModule, CommonModule, DataViewModule],
  templateUrl: "./list-transactions.component.html",
  styleUrl: "./list-transactions.component.scss",
})
export class ListTransactionsComponent implements OnInit {
  data!: any[];

  constructor(private service: TransactionsService) {}

  ngOnInit() {
    this.service.getTransactions().subscribe((response) => {
      this.data = response as [];
    });
  }
}
