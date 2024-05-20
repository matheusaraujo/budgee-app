import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NavigationEnd, Router } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { DropdownModule } from "primeng/dropdown";
import { filter } from "rxjs/operators";
import { TransactionsService } from "../transactions.service";

interface Year {
  name: string;
  code: string;
}

interface Month {
  name: string;
  code: string;
}

@Component({
  selector: "app-menu",
  standalone: true,
  imports: [ButtonModule, CardModule, DropdownModule, FormsModule],
  templateUrl: "./menu.component.html",
  styleUrl: "./menu.component.scss",
})
export class MenuComponent implements OnInit {
  years: Year[] = [
    { name: "2024", code: "2024" },
    { name: "2023", code: "2023" },
    { name: "2022", code: "2022" },
  ];
  selectedYear?: Year;

  months: Month[] = [
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
  selectedMonth?: Month;

  constructor(
    private router: Router,
    private service: TransactionsService,
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.setSelectionsFromUrl();
      });
  }

  onYearChange() {
    if (!this.selectedYear) this.selectedMonth = undefined;
    this.navigate();
  }

  onMonthChange() {
    this.navigate();
  }

  setSelectionsFromUrl() {
    const segments = this.router.url.split("/").slice(1);
    this.selectedYear = undefined;
    this.selectedMonth = undefined;

    if (segments.length > 0) {
      const yearSegment = segments[0];
      this.selectedYear = this.years?.find((year) => year.code === yearSegment);

      if (segments.length > 1) {
        const monthSegment = segments[1];
        this.selectedMonth = this.months?.find(
          (month) => month.code === monthSegment,
        );
      }
    }

    this.service.setYearMonth(
      this.selectedYear?.code,
      this.selectedMonth?.code,
    );
  }

  navigate() {
    if (this.selectedYear && this.selectedMonth) {
      this.router.navigate([
        `/${this.selectedYear.code}/${this.selectedMonth.code}`,
      ]);
    } else if (this.selectedYear) {
      this.router.navigate([`/${this.selectedYear.code}`]);
    } else {
      this.router.navigate([`/`]);
    }
  }
}
