import { Component, OnInit } from "@angular/core";
import { TableModule } from "primeng/table";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-list-transactions",
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: "./list-transactions.component.html",
  styleUrl: "./list-transactions.component.scss",
})
export class ListTransactionsComponent implements OnInit {
  products!: any[];

  ngOnInit() {
    this.products = [
      {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: "bamboo-watch.jpg",
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5,
      },
      {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: "bamboo-watch.jpg",
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5,
      },
      {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: "bamboo-watch.jpg",
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5,
      },
    ];
  }
}
