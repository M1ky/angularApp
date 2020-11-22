import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../../services/product-data.service';
import { Product } from '../../classes/product';
import { ThisReceiver } from '@angular/compiler';

@Component({
	selector: 'products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

	products: Array<Product> = [];

	private _greaterThen: number = 0;
	private _lesserThen: number = 0;
	private _isReset: boolean = false;

	constructor(private data: ProductDataService) {
		console.log(this.products);
	}

	ngOnInit(): void {
		this.products = this.data.getProducts();
		this._isReset = true;
	}

	get greaterThen(): number {
		return this._greaterThen;
	}

	set greaterThen(value: number) {
		this._greaterThen = value;
		this._isReset = false;
	}

	get lesserThen(): number {
		return this._lesserThen;
	}

	set lesserThen(value: number) {
		this._lesserThen = value;
		this._isReset = false;
	}

	get isReset(): boolean {
		return this._isReset;
	}

	set isReset(value: boolean) {
		this._isReset = value;
	}

	resetFilter() {
		this._greaterThen = 0;
		this._lesserThen = 0;
		this._isReset = true;
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
