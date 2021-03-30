import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ExchangesService {
  exchanges: IExchange;
  currencies: string[];
  pages: string[] = ['USD', 'EUR'];
  pageNumber = 0;

  constructor(private http: HttpClient) {}

  getExchanges(currency: string = 'USD'): void {
    this.http
      .get(`https://api.exchangeratesapi.io/latest?base=${currency}`)
      .subscribe(async (value: IExchange) => {
        const exc: any[] = [];
        const changes: string[] = [];

        for (const key in value.rates) {
          if (!value.rates.hasOwnProperty(key)) {
            continue;
          }
          exc.push({ key, value: value.rates[key].toFixed(5) });
          changes.push(key);
        }

        this.currencies = changes;

        this.exchanges = {
          rates: exc.slice(0, 5),
          base: value.base,
          date: value.date,
        };
      });
  }
}

interface IExchange {
  rates: any;
  base: string;
  date: string;
}
