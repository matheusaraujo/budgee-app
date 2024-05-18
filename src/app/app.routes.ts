import { Routes } from "@angular/router";
import { DefaultViewComponent } from "./default-view/default-view.component";
import { MonthlyViewComponent } from "./monthly-view/monthly-view.component";
import { YearlyViewComponent } from "./yearly-view/yearly-view.component";

export const routes: Routes = [
  { path: "", component: DefaultViewComponent },
  { path: ":year/:month", component: MonthlyViewComponent },
  { path: ":year", component: YearlyViewComponent },
];
