import { Component, OnInit } from '@angular/core';
import { Product } from '../../classes/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductDataService } from '../../services/product-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-edit-product',
	templateUrl: './edit-product.component.html',
	styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

	messageForm: FormGroup;
	submitted = false;
	success = false;

	constructor(private productService: ProductDataService, private route: ActivatedRoute, private formBuilder: FormBuilder) {
		this.messageForm = this.formBuilder.group({
			name: ['', Validators.required],
			price: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
			info: ['', Validators.required],
			img: ['', Validators.required],
			deliveryPrice: ['', Validators.pattern("^[0-9]*$")],
			deliveryTime: ['', Validators.pattern("^[0-9]*$")],
		});
	}

	id!: number;
	product!: Product;

	ngOnInit(): void {
		this.route.paramMap.subscribe(
			(params) => {
				this.id = parseInt(params.get('id') || '');
			}
		)

		this.loadData();
	}

	loadData() {
		var product = this.productService.getProduct(this.id);
		if (product instanceof Product) {
			this.product = product;
		} else {
			this.product = new Product(-1, "test", 0, "test", "test");
		}
	}

	onSubmit() {
		this.submitted = true;

		if (this.messageForm.invalid) {
			return;
		}
		this.success = true;
		this.editProduct();
	}

	editProduct() {
		this.productService.updateProduct(this.product);
	}

}
