import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: "country-details",
        loadChildren: () =>
          import("../country-details/country-details.module").then(
            m => m.CountryDetailsModule
          )
      },
      {
        path: "language-list",
        loadChildren: () =>
          import("../language-list/language-list.module").then(
            m => m.LanguageListModule
          )
      },
      {
        path: "currency-list",
        loadChildren: () =>
          import("../currency/currency.module").then(
            m => m.CurrencyModule
          )
      },
      { path: '', redirectTo: "country-details" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
