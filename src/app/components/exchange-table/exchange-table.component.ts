import { Component, OnInit } from '@angular/core';
import { ExchangesService } from 'src/app/services/exchanges.service';

@Component({
  selector: 'app-exchange-table',
  templateUrl: './exchange-table.component.html',
  styleUrls: ['./exchange-table.component.scss'],
})
export class ExchangeTableComponent implements OnInit {
  constructor(public exc: ExchangesService) {
    this.exc.getExchanges();
  }

  ngOnInit(): void {}

  previousPage(): void {
    if (this.exc.pageNumber !== -1) {
      // tslint:disable-next-line: no-unused-expression
      this.exc.pageNumber--;
      this.exc.getExchanges(this.exc.pages[this.exc.pageNumber]);
    }
  }

  nextPage(): void {
    if (this.exc.pageNumber <= this.exc.pages.length) {
      // tslint:disable-next-line: no-unused-expression
      this.exc.pageNumber++;
      this.exc.getExchanges(this.exc.pages[this.exc.pageNumber]);
    }
  }
}
