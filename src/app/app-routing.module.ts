import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test1Component } from './test1/test1.component';
import { CategoriesComponent } from './components/categories/categories.component';

const routes: Routes = [
	{ path: 'test1', component: Test1Component },
	{ path: '', component: CategoriesComponent }
];

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
