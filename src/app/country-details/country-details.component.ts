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
  errorMessage='';

  private subscriptions: Subscription = new Subscription();

  constructor(public _countryService: CountryServiceService) {}

  ngOnInit() {
    this.subscriptions.add(
    this._countryService.countryCodeValue.subscribe(code => {
      if(code){
        this.getCountryDetails(code);
      }
      else{
        this.errorMessage='Please select country'
      }
    }));
  }
  /**
   * 
   * @param countryCode - 'alpha3code'
   */
  getCountryDetails(countryCode) {
    this._countryService.getCountryDetails(countryCode).subscribe(data => {
      this.countryDetail = data;
    },err =>{
      this.errorMessage='Something went wrong'
    });
  }

  ngOnDestroy() {
    /** unsubcribe observable on component destroy*/
    this.subscriptions.unsubscribe();
  }

}
