import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { NavComponent } from './components/nav/nav.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { OrderModule } from 'ngx-order-pipe';
import { FormsModule } from '@angular/forms';
import { GreaterThenFilterPipe } from './pipes/greater-then-filter.pipe';
import { LesserThenFilterPipe } from './pipes/lesser-then-filter.pipe';


@NgModule({
	declarations: [
		AppComponent,
		ProductsComponent,
		NavComponent,
		AddProductComponent,
		EditProductComponent,
		GreaterThenFilterPipe,
		LesserThenFilterPipe,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		OrderModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
