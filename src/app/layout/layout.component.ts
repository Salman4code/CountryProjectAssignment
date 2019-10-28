import { Component, OnInit } from "@angular/core";
import { navItems } from "../menu";
import { CountryServiceService } from "../service/country-service.service";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  public navItems = navItems;
  countryList: [];
  selectedCountry;

  constructor(public _countryService: CountryServiceService) {}

  ngOnInit() {
    this.selectedCountry ='Select Country'
    this.getCountryList();
  }

 
  /**
   * get country list function
   */
  getCountryList() {
    this._countryService.getCountries().subscribe(data => {
      this.countryList = data;
    });
  }
  /**
   * on select option change this function will fired
   */
  onCountryChange() {
    let selectedCode;
    selectedCode=this.selectedCountry;
    if(this.selectedCountry === 'Select Country'){
      // making selcted country code to null to avoid unwanted api call 
      // if select country option selected
      selectedCode = null;
    }
    this._countryService.updateCountryCode(selectedCode)
  }
}
