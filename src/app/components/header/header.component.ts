import { Component, OnInit } from '@angular/core';
import { ExchangesService } from 'src/app/services/exchanges.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  selectedOption: string;

  constructor(public exc: ExchangesService) {}

  ngOnInit(): void {}
}
