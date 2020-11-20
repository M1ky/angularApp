export class Product {
	private name: string;
	private price: number;
	private info: string;
	private img: string;
	private deliveryPrice?: number;
	private deliveryTime?: number;
	private rating?: number;

	constructor
		(
			name: string, price: number, info: string,
			img: string, deliveryPrice?: number, deliveryTime?: number,
			rating?: number
		) {
		this.name = name;
		this.price = price;
		this.info = info;
		this.img = img;
		this.deliveryPrice = deliveryPrice;
		this.deliveryTime = deliveryTime;
		this.rating = rating;
	}

	public getName(): string {
		return this.name;
	}

	public setName(name: string): void {
		this.name = name;
	}

	public getPrice(): number {
		return this.price;
	}

	public setPrice(price: number): void {
		this.price = price;
	}

	public getInfo(): string {
		return this.info;
	}

	public setInfo(info: string): void {
		this.info = info;
	}

	public getImg(): string {
		return this.img;
	}

	public setImg(img: string): void {
		this.img = img;
	}

	public getDeliveryPrice() {
		return this.deliveryPrice;
	}

	public setDeliveryPrice(deliveryPrice: number): void {
		this.deliveryPrice = deliveryPrice;
	}

	public getDeliveryTime() {
		return this.deliveryTime;
	}

	public setDeliveryTime(deliveryTime: number): void {
		this.deliveryTime = deliveryTime;
	}

	public getRating() {
		return this.rating;
	}

	public setRating(rating: number): void {
		this.rating = rating;
	}




}
