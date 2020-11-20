import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductFormComponent } from './components/add-product-form/add-product-form.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
	{ path: '', component: ProductsComponent },
	{ path: 'add-new-product', component: AddProductFormComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
