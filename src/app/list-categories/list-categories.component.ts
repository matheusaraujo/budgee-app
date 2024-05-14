import { Component, OnInit } from "@angular/core";
import { ChartModule } from "primeng/chart";
import { TransactionsService } from "../transactions.service";

@Component({
  selector: "app-list-categories",
  standalone: true,
  imports: [ChartModule],
  templateUrl: "./list-categories.component.html",
  styleUrl: "./list-categories.component.scss",
})
export class ListCategoriesComponent implements OnInit {
  data: any;
  options: any;

  constructor(private service: TransactionsService) {}

  ngOnInit() {
    this.service.getTransactionsByCategory().subscribe((response) => {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue("--text-color");

      this.data = {
        labels: (response as []).map((r: any) => r.category),
        datasets: [
          {
            data: (response as []).map((r: any) => r.amount),
          },
        ],
      };

      this.options = {
        cutout: "30%",
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
        },
      };
    });
  }
}
