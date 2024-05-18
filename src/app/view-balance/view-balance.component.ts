import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { CardModule } from "primeng/card";
import { TransactionsService } from "../transactions.service";

@Component({
  selector: "app-view-balance",
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: "./view-balance.component.html",
  styleUrl: "./view-balance.component.scss",
})
export class ViewBalanceComponent implements OnInit {
  showBalance: boolean = false;
  buttonIcon: string = "pi pi-eye toggle-button";
  data!: any;

  constructor(private service: TransactionsService) {}

  ngOnInit() {
    this.service.getBalance().subscribe((response) => {
      this.data = response;
    });
  }

  toggleBalance() {
    this.showBalance = !this.showBalance;
    this.buttonIcon = this.showBalance
      ? "pi pi-eye-slash toggle-button"
      : "pi pi-eye toggle-button";
  }
}
