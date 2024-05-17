import { Component, OnInit } from "@angular/core";
import { TransactionsService } from "../transactions.service";
import { ChartModule } from "primeng/chart";

@Component({
  selector: "app-list-dates",
  standalone: true,
  imports: [ChartModule],
  templateUrl: "./list-dates.component.html",
  styleUrl: "./list-dates.component.scss",
})
export class ListDatesComponent implements OnInit {
  data: any;
  options: any;

  constructor(private service: TransactionsService) {}

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary",
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

    this.service.getTransactionsByDate().subscribe((response) => {
      this.data = {
        labels: (response as []).map((r: any) => r.date),
        datasets: [
          {
            data: (response as []).map((r: any) => r.amount),
          },
        ],
      };

      this.options = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false,
            },
            display: false,
          },
          y: {
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false,
            },
          },
        },
      };
    });
  }
}
