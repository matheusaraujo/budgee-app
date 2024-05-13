import { Component } from "@angular/core";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";
import { FloatLabelModule } from "primeng/floatlabel";

@Component({
  selector: "app-create-transaction",
  standalone: true,
  imports: [FormsModule, InputTextModule, FloatLabelModule],
  templateUrl: "./create-transaction.component.html",
  styleUrl: "./create-transaction.component.scss",
})
export class CreateTransactionComponent {
  value: string | undefined;
}
