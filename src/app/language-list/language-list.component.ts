import { Component, OnInit } from "@angular/core";
import { CountryServiceService } from "../service/country-service.service";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-language-list",
  templateUrl: "./language-list.component.html",
  styleUrls: ["./language-list.component.scss"]
})
export class LanguageListComponent implements OnInit {
  countryDetail:any;
  errorMessage='';
  private subscriptions: Subscription = new Subscription();

  constructor(public _countryService: CountryServiceService) {}

  ngOnInit() {
    this.subscriptions.add(
    this._countryService.countryCodeValue.subscribe(code => {
      if(code){
        this.getCountryDetails(code);
      }else{
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
    },
    err =>{
      console.log(err);
      // this.countryDetail = null
    });
  }
  ngOnDestroy() {
    /** unsubcribe observable on component destroy*/
    this.subscriptions.unsubscribe();
  }
}
