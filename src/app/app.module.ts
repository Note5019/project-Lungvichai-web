import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Test1Component } from './test1/test1.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HttpModule } from '@angular/http'; 
import { HttpService } from './services/http.service';
@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
