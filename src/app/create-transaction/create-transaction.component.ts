import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { FloatLabelModule } from "primeng/floatlabel";
import { InputTextModule } from "primeng/inputtext";
import { TransactionsService } from "../transactions.service";

@Component({
  selector: "app-create-transaction",
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    ButtonModule,
    CardModule,
  ],
  templateUrl: "./create-transaction.component.html",
  styleUrl: "./create-transaction.component.scss",
})
export class CreateTransactionComponent {
  value: string | undefined;

  constructor(private service: TransactionsService) {}

  onSubmit(): void {
    this.service.createTransaction(this.value);
    window.location.reload(); // TODO: improve this!!!
  }
}
