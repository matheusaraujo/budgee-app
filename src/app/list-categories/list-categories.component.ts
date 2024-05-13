import { Component, OnInit } from "@angular/core";
import { ChartModule } from "primeng/chart";

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

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");

    this.data = {
      labels: ["Category 1", "Category 2", "Category 3"],
      datasets: [
        {
          data: [300, 58, 100],
          backgroundColor: [
            documentStyle.getPropertyValue("--blue-500"),
            documentStyle.getPropertyValue("--yellow-500"),
            documentStyle.getPropertyValue("--green-500"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--blue-400"),
            documentStyle.getPropertyValue("--yellow-400"),
            documentStyle.getPropertyValue("--green-400"),
          ],
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
  }
}
