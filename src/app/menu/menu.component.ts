import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-menu",
  standalone: true,
  imports: [ButtonModule],
  templateUrl: "./menu.component.html",
  styleUrl: "./menu.component.scss",
})
export class MenuComponent {}
