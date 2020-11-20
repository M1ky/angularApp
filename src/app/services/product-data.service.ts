import { Injectable } from '@angular/core';
import { Product } from '../classes/product';

@Injectable({
	providedIn: 'root'
})
export class ProductDataService {

	public static PRODUCTS: string = "products";

	constructor() {
		var staticProducts = [
			new Product("Buty adidas", 90, "Buty do biegania, białe", "https://www.pinterest.com/pin/349310514842123368/"),
			new Product("Buty nike", 100, "Buty czarne nike do biegania", "https://www.indiamart.com/proddetail/nike-airmax-2017-nike-shoe-11543792212.html"),
		];

		localStorage.setItem(ProductDataService.PRODUCTS, JSON.stringify(staticProducts));
	}

	addProduct(product: Product) {
		try {
			var products = JSON.parse(localStorage.getItem(ProductDataService.PRODUCTS) || '{}');
			products.push(product);
			localStorage.setItem(ProductDataService.PRODUCTS, JSON.stringify(products));
		} catch (e) {
			console.error('Error saving to localStorage', e);
		}
	}

	getProducts() {
		return JSON.parse(localStorage.getItem(ProductDataService.PRODUCTS) || '{}');
	}
}
