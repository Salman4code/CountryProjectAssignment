import { Component, OnInit } from "@angular/core";
import { CountryServiceService } from "../service/country-service.service";

@Component({
  selector: "app-language-list",
  templateUrl: "./language-list.component.html",
  styleUrls: ["./language-list.component.scss"]
})
export class LanguageListComponent implements OnInit {
  countryDetail = {};
  constructor(public _countryService: CountryServiceService) {}

  ngOnInit() {
    this.getCountryDetails();
  }

  getCountryDetails() {
    this._countryService.getCountryDetails("AFG").subscribe(data => {
      this.countryDetail = data;
    });
  }
}
