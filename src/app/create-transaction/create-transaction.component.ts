import { Component } from "@angular/core";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";
import { FloatLabelModule } from "primeng/floatlabel";
import { TransactionsService } from "../transactions.service";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-create-transaction",
  standalone: true,
  imports: [FormsModule, InputTextModule, FloatLabelModule, ButtonModule],
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
