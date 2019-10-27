import { Component, OnInit } from '@angular/core';
import { CountryServiceService } from "../service/country-service.service";


@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  countryDetail = {};
  constructor(public _countryService: CountryServiceService) { }

  ngOnInit() {
    this.getCountryDetails();
  }

  getCountryDetails(){
    this._countryService.getCountryDetails('AFG').subscribe(data =>{
      this.countryDetail = data;
    })
  }
}
