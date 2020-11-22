import { Injectable } from '@angular/core';
import { Product } from '../classes/product';

@Injectable({
	providedIn: 'root'
})
export class ProductDataService {

	public static PRODUCTS: string = "products";

	constructor() {
		var staticProducts: Array<Product> = [
			new Product(1, "Czysty kod", 90, "Autor: Bob Martin, Książka o programowaniu", "https://ecsmedia.pl/c/czysty-kod-podrecznik-dobrego-programisty-b-iext43256635.jpg", 15, 3),
			new Product(2, "Czysta architektura", 100, "Autor: Bob Martin, Książka o architekturze", "https://ecsmedia.pl/c/czysta-architektura-struktura-i-design-oprogramowania-przewodnik-dla-profesjonalistow-b-iext52687780.jpg", 10, 3),
			new Product(3, "Thinking in Java", 150, "Autor: Bruce Eckel, Książka o Javie", "https://www.enbook.pl//media/catalog/product/cache/3/thumbnail/140x220/9df78eab33525d08d6e5fb8d27136e95/i/m/img9780131872486.jpg", 20, 4),
			new Product(4, "HTML i CSS", 75, "Autor: Jon Duckett, Książka o front-end", "https://ecsmedia.pl/c/html-i-css-zaprojektuj-i-zbuduj-witryne-www-podrecznik-front-end-developera-w-iext52899159.jpg", 0, 7)
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
