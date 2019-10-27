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
    this.getCountryList();
  }

  receiveCollapsed($event) {
    this.collapedSideBar = $event;
  }
  getCountryList() {
    this._countryService.getCountries().subscribe(data => {
      console.log(data);
      this.countryList = data;
    });
  }
  onCountryChange() {
    console.log(this.selectedCountry);
  }
}
