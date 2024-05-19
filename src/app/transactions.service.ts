import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TransactionsService {
  baseUrl: string = "http://localhost:3000";
  private year?: string;
  private month?: string;

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

  getTransactionsByDate() {
    return this.http.get(`${this.baseUrl}/transactions/by-date`);
  }

  getBalance() {
    console.log("getBalance");
    return this.http.get(
      `${this.baseUrl}/transactions/balance${this.makeParams()}`,
    );
  }

  private makeParams(): string {
    if (this.year === undefined && this.month === undefined) return "";
    else if (this.month === undefined) return `?year=${this.year}`;
    else return `?year=${this.year}&month=${this.month}`;
  }

  setYearMonth(y?: string, m?: string) {
    console.log("setYearMonth", y, m);
    this.year = y;
    this.month = m;
  }
}
