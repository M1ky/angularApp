import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../../services/product-data.service';
import { Product } from '../../classes/product';

@Component({
	selector: 'products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

	products: Array<Product> = this.data.getProducts();

	constructor(private data: ProductDataService) {
		console.log(this.products);
	}

	ngOnInit(): void {
	}

	editItem(productId: number) {
		console.log(productId);
	}

	deleteItem(productId: number) {
		console.log(productId);
		this.data.deleteItem(productId);
		this.reloadData();
	}

	reloadData() {
		this.products = this.data.getProducts();
	}

	key: string = 'id';
	reverse: boolean = false;

	sort(key: string) {
		this.key = key;
		this.reverse = !this.reverse;
	}
}
