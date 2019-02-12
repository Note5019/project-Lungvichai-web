import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Test1Component } from './test1/test1.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HttpModule } from '@angular/http';
import { HttpService } from './services/http.service';
import { CategoryModalComponent } from './components/category-modal/category-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    CategoriesComponent,
    CategoryModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    NgbModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    CategoryModalComponent
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
