/// <reference path="services/person.service.ts" />
/// <reference path="services/person.service.ts" />

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
    imports: [BrowserModule, FormsModule,  AppRoutingModule, HttpModule,],
    declarations: [
        AppComponent,
        NavComponent,
        AboutComponent,
        ContactComponent,
        SearchComponent,
        LoginComponent,
        HomeComponent,
        RegisterComponent
          ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
