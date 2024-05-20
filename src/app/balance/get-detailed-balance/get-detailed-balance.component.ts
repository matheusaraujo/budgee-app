import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { TransactionsService } from "@app/transactions.service";
import { CardModule } from "primeng/card";

@Component({
  selector: "app-get-detailed-balance",
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: "./get-detailed-balance.component.html",
  styleUrl: "./get-detailed-balance.component.scss",
})
export class GetDetailedBalanceComponent {
  data!: any;

  constructor(private service: TransactionsService) {}

  ngOnInit() {
    this.service.getDetailedBalance().subscribe((response) => {
      this.data = response;
    });
  }
}
