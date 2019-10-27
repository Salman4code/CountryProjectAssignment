import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CountryServiceService {
  baseUrl = "https://restcountries.eu/rest/v2";
  private countryCode = new BehaviorSubject<any>(null);
  countryCodeValue = this.countryCode.asObservable();

  constructor(private _http: HttpClient) {}

  /**
   * API call for country list
   */
  getCountries(): Observable<any> {
    return this._http.get(this.baseUrl + "/all");
  }

  /**
   * API call for country detail
   */
  getCountryDetails(countryCode): Observable<any> {
    return this._http.get(this.baseUrl + "/alpha/" + countryCode);
  }

  /**
   *
   * @param value - Updated country code
   */
  updateCountryCode(value: any) {
    this.countryCode.next(value);
  }
}
