import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CountryServiceService } from '../service/country-service.service';
import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

@NgModule({
  declarations: [
    LayoutComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    AppHeaderModule,
    AppSidebarModule,
    FormsModule
  ],
  providers: [CountryServiceService]
})
export class LayoutModule { }
