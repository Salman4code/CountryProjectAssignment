import { Component, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';

import { CountryServiceService } from "../service/country-service.service";

@Component({
  selector: "app-country-details",
  templateUrl: "./country-details.component.html",
  styleUrls: ["./country-details.component.scss"]
})
export class CountryDetailsComponent implements OnInit {
  countryDetail:any;
  private subscriptions: Subscription = new Subscription();

  constructor(public _countryService: CountryServiceService) {}

  ngOnInit() {
    this.subscriptions.add(
    this._countryService.countryCodeValue.subscribe(code => {
      this.getCountryDetails(code);
    }));
  }
  
  getCountryDetails(countryCode) {
    this._countryService.getCountryDetails(countryCode).subscribe(data => {
      this.countryDetail = data;
    },err =>{});
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
