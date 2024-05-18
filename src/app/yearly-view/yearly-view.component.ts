import { Component, OnInit } from "@angular/core";

import { CardModule } from "primeng/card";
import { DropdownModule } from "primeng/dropdown";
import { TabViewModule } from "primeng/tabview";

interface Year {
  name: string;
  code: string;
}

interface Month {
  name: string;
  code: string;
}

@Component({
  selector: "app-yearly-view",
  standalone: true,
  imports: [CardModule, TabViewModule, DropdownModule],
  templateUrl: "./yearly-view.component.html",
  styleUrl: "./yearly-view.component.scss",
})
export class YearlyViewComponent implements OnInit {
  years: Year[] | undefined;
  selectedYear: Year | undefined;

  months: Month[] | undefined;
  selectedMonth: Month | undefined;

  ngOnInit() {
    this.years = [
      { name: "2022", code: "2022" },
      { name: "2023", code: "2023" },
      { name: "2024", code: "2024" },
    ];

    this.months = [
      { name: "January", code: "1" },
      { name: "February", code: "2" },
      { name: "March", code: "3" },
      { name: "April", code: "4" },
      { name: "May", code: "5" },
      { name: "June", code: "6" },
      { name: "July", code: "7" },
      { name: "August", code: "8" },
      { name: "September", code: "9" },
      { name: "October", code: "10" },
      { name: "November", code: "11" },
      { name: "December", code: "12" },
    ];
  }
}
