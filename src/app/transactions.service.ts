import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TransactionsService {
  baseUrl: string = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  createTransaction(input: string | null | undefined) {
    this.http
      .post(`${this.baseUrl}/transactions`, {
        transaction: input,
      })
      .subscribe();
  }

  getTransactions() {
    return this.http.get(`${this.baseUrl}/transactions`);
  }

  getTransactionsByCategory() {
    return this.http.get(`${this.baseUrl}/transactions/by-category`);
  }
}
