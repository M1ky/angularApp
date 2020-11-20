import { Component, OnInit } from '@angular/core';
import { Product } from '../../classes/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductDataService } from '../../services/product-data.service';

@Component({
	selector: 'app-add-product-form',
	templateUrl: './add-product-form.component.html',
	styleUrls: ['./add-product-form.component.scss']
})
export class AddProductFormComponent implements OnInit {

	messageForm: FormGroup;
	submitted = false;
	success = false;

	constructor(private data: ProductDataService, private formBuilder: FormBuilder) {
		this.messageForm = this.formBuilder.group({
			name: ['', Validators.required],
			price: ['', Validators.required, Validators.pattern("^[0-9]*$")],
			info: ['', Validators.required],
			img: ['', Validators.required],
			deliveryPrice: ['', Validators.pattern("^[0-9]*$")],
			deliveryTime: ['', Validators.pattern("^[0-9]*$")],
			rating: ['', Validators.pattern("^[0-5]*$")],
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
		var values = this.messageForm.value;
		var product = new Product(values.name, values.price, values.info, values.img, values.deliveryPrice, values.deliveryTime, values.rating);
		this.data.addProduct(product);
	}

	ngOnInit(): void {
	}

}
