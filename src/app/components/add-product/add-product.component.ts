import { Component, OnInit } from '@angular/core';
import { Product } from '../../classes/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductDataService } from '../../services/product-data.service';

@Component({
	selector: 'app-add-product',
	templateUrl: './add-product.component.html',
	styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

	messageForm: FormGroup;
	submitted = false;
	success = false;

	constructor(private data: ProductDataService, private formBuilder: FormBuilder) {
		this.messageForm = this.formBuilder.group({
			name: ['', Validators.required],
			price: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
			info: ['', Validators.required],
			img: ['', Validators.required],
			deliveryPrice: ['', Validators.pattern("^[0-9]*$")],
			deliveryTime: ['', Validators.pattern("^[0-9]*$")],
		});
	}

	onSubmit() {
		this.submitted = true;

		if (this.messageForm.invalid) {
			return;
		}
		this.success = true;
		this.addNewProduct();
	}

	addNewProduct() {
		var v = this.messageForm.value;
		var product = new Product(this.data.getLastId() + 1, v.name, v.price, v.info, v.img, v.deliveryPrice, v.deliveryTime);
		console.log('here');
		console.log(product);
		this.data.addProduct(product);
	}

	ngOnInit(): void {
	}

}
