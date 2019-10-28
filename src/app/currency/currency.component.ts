import { Component, OnInit } from '@angular/core';
import { CountryServiceService } from "../service/country-service.service";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  countryDetail:any;
  errorMessage='';

  private subscriptions: Subscription = new Subscription();
  
  constructor(public _countryService: CountryServiceService) { }

  ngOnInit() {
    this.subscriptions.add(
    this._countryService.countryCodeValue.subscribe(code => {
      if(code){
        this.getCountryDetails(code);
      }
      else{
        this.errorMessage='Please select country'
      }
    }))
  }
  /**
   * 
   * @param countryCode - 'alpha3code'
   */
  getCountryDetails(countryCode){
    this._countryService.getCountryDetails(countryCode).subscribe(data =>{
      this.countryDetail = data;
    },err=>{
      this.errorMessage='Something went wrong'
    })
  }

  ngOnDestroy() {
    /** unsubcribe observable on component destroy*/
    this.subscriptions.unsubscribe();
  }
}
