import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { CardModule } from "primeng/card";
import { TransactionsService } from "@app/transactions.service";

@Component({
  selector: "app-get-balance",
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: "./get-balance.component.html",
  styleUrl: "./get-balance.component.scss",
})
export class GetBalanceComponent implements OnInit {
  data!: any;

  constructor(private service: TransactionsService) {}

  ngOnInit() {
    this.service.getBalance().subscribe((response) => {
      this.data = response;
    });
  }
}
