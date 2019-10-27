import { Component, OnInit } from "@angular/core";
import { navItems } from "../menu";
import { CountryServiceService } from "../service/country-service.service";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  collapedSideBar: boolean;
  public navItems = navItems;
  countryList: [];
  selectedCountry;

  constructor(public _countryService: CountryServiceService) {}

  ngOnInit() {
    this.selectedCountry ='Select Country'
    this.getCountryList();
  }

  receiveCollapsed($event) {
    this.collapedSideBar = $event;
  }
  getCountryList() {
    this._countryService.getCountries().subscribe(data => {
      this.countryList = data;
    });
  }
  onCountryChange() {
    this._countryService.updateCountryCode(this.selectedCountry)
  }
}
