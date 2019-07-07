import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/share/header/header.component';
import { BannerComponent } from './components/share/banner/banner.component';
import { BrandComponent } from './components/share/brand/brand.component';
import { CategoryComponent } from './components/share/category/category.component';
import { ExclusiveComponent } from './components/share/exclusive/exclusive.component';
import { FeaturesComponent } from './components/share/features/features.component';
import { FooterComponent } from './components/share/footer/footer.component';
import { VolunteerComponent } from './components/dialog/volunteer/volunteer.component';
import { JoinComponent } from './components/share/join/join.component';
import { DriverComponent } from './components/share/driver/driver.component';
import { DonateComponent } from './components/share/donate/donate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    BrandComponent,
    CategoryComponent,
    ExclusiveComponent,
    FeaturesComponent,
    FooterComponent,
    VolunteerComponent,
    JoinComponent,
    DriverComponent,
    DonateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  entryComponents:[
    VolunteerComponent
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
