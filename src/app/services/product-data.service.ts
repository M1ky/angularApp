import { Injectable } from '@angular/core';
import { Product } from '../classes/product';

@Injectable({
	providedIn: 'root'
})
export class ProductDataService {

	public static PRODUCTS: string = "products";

	constructor() {
		var staticProducts: Array<Product> = [
			new Product(1, "Buty adidas", 90, "Buty do biegania, białe", "img1", 15, 3),
			new Product(2, "Buty nike", 100, "Buty czarne nike do biegania", "img2", 10, 3),
		];

		sessionStorage.setItem(ProductDataService.PRODUCTS, JSON.stringify(staticProducts));
	}

	addProduct(product: Product) {
		try {
			var products = JSON.parse(sessionStorage.getItem(ProductDataService.PRODUCTS) || '{}');
			products.push(product);
			sessionStorage.setItem(ProductDataService.PRODUCTS, JSON.stringify(products));
		} catch (e) {
			console.error('Error saving to sessionStorage', e);
		}
	}

	getProducts(): Array<Product> {
		var arrayOfObjects = JSON.parse(sessionStorage.getItem(ProductDataService.PRODUCTS) || '{}') as Array<any>;
		var arrayOfProducts: Array<Product> = [];

		arrayOfObjects.forEach(e => {
			var product = new Product(e.id, e.name, e.price, e.info, e.img, e.deliveryPrice, e.deliveryTime);
			arrayOfProducts.push(product);
		});

		return arrayOfProducts;
	}

	getProduct(id: number) {
		var products = this.getProducts();
		let lastProduct = products.find(product => product.getId() === id);
		return lastProduct;
	}

	getLastId(): number {
		var products = this.getProducts();
		let lastProduct = products[products.length - 1];
		return lastProduct.getId();
	}

	saveProducts(products: Array<Product>) {
		try {
			sessionStorage.setItem(ProductDataService.PRODUCTS, JSON.stringify(products));
		} catch (e) {
			console.error('Error saving to sessionStorage', e);
		}
	}

	deleteItem(id: number) {
		let products = this.getProducts();
		let index = products.findIndex(product => product.getId() === id);

		if (index !== -1) {
			products.splice(index, 1);
			this.saveProducts(products);
		} else {
			console.log("Did not find product with id: ", id);
		}
	}

	updateProduct(product: Product) {
		var products = this.getProducts();
		let indexToEdit = products.findIndex(p => p.getId() === product.getId());
		if (indexToEdit !== -1) {
			products.splice(indexToEdit, 1);
			products.push(product);
			this.saveProducts(products);
		} else {
			console.log("Did not find product with id: ", product.getId());
		}
	}
}
