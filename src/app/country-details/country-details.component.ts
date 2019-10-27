import { Component, OnInit } from '@angular/core';
import { CountryServiceService } from "../service/country-service.service";

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  countryDetail = {};
  constructor(public _countryService: CountryServiceService) { }

  ngOnInit() {
    this.getCountryDetails();
  }
  getCountryDetails(){
    this._countryService.getCountryDetails('ALB').subscribe(data =>{
      console.log(data);
      this.countryDetail = data;
    })
  }
}
