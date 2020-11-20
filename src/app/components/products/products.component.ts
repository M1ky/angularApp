import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../../services/product-data.service';

@Component({
	selector: 'products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

	products = this.data.getProducts();

	constructor(private data: ProductDataService) {
		console.log(this.products);
	}

	ngOnInit(): void {
	}

}
