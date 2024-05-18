import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-menu",
  standalone: true,
  imports: [ButtonModule],
  templateUrl: "./menu.component.html",
  styleUrl: "./menu.component.scss",
})
export class MenuComponent implements OnInit {
  url: string = "/";

  constructor(private router: Router) {}
  navigate(view: string) {
    this.router.navigate([view]);
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) this.url = event.urlAfterRedirects;
    });
  }
}
