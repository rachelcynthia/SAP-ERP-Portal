import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LandingHeaderComponent } from './landing/landing-header/landing-header.component';
import { LoginComponent } from './customer/login/login.component';
import { LoginHeaderComponent } from './customer/login-header/login-header.component';
import { LandingAboutComponent } from './landing/landing-about/landing-about.component';
import { AboutCompanyComponent } from './landing/landing-about/about-company/about-company.component';
import { AboutMeComponent } from './landing/landing-about/about-me/about-me.component';
import { AboutCodeComponent } from './landing/landing-about/about-code/about-code.component';
import { AboutContactComponent } from './landing/landing-about/about-contact/about-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LandingHeaderComponent,
    LoginComponent,
    LoginHeaderComponent,
    LandingAboutComponent,
    AboutCompanyComponent,
    AboutMeComponent,
    AboutCodeComponent,
    AboutContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
