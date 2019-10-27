import { Component, OnInit } from '@angular/core';
import { CountryServiceService } from "../service/country-service.service";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  countryDetail = {};
  private subscriptions: Subscription = new Subscription();
  
  constructor(public _countryService: CountryServiceService) { }

  ngOnInit() {
    this.subscriptions.add(
    this._countryService.countryCodeValue.subscribe(code => {
      this.getCountryDetails(code);
    }))
  }

  getCountryDetails(countryCode){
    this._countryService.getCountryDetails(countryCode).subscribe(data =>{
      this.countryDetail = data;
    })
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
