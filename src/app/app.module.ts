import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { /*NgbModule,*/ NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoriesComponent } from './components/categories/categories.component';
import { HttpModule } from '@angular/http';
import { HttpService } from './services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { CategoryModalComponent } from './components/category-modal/category-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    HeaderComponent,
    CategoryModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    // NgbModule,
    NgbModalModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    CategoryModalComponent
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
