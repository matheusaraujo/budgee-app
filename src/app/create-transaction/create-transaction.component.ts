import { Component } from "@angular/core";
import { TransactionsService } from "../transactions.service";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-create-transaction",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [TransactionsService],
  templateUrl: "./create-transaction.component.html",
  styleUrl: "./create-transaction.component.scss",
})
export class CreateTransactionComponent {
  transactionsForm = this.formBuilder.group({ inputData: "" });

  constructor(
    private service: TransactionsService,
    private formBuilder: FormBuilder,
  ) {}

  onSubmit(): void {
    this.service.createTransaction(this.transactionsForm.value.inputData);
    this.transactionsForm.reset();
    window.location.reload();
  }
}
