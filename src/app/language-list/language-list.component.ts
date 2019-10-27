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
    },
    err =>{
      console.log(err);
      // this.countryDetail = null
    });
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
