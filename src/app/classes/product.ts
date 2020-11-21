export class Product {
	id: number;
	name: string;
	price: number;
	info: string;
	img: string;
	deliveryPrice?: number;
	deliveryTime?: number;

	constructor
		(
			id: number, name: string, price: number, info: string,
			img: string, deliveryPrice?: number, deliveryTime?: number
		) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.info = info;
		this.img = img;
		this.deliveryPrice = deliveryPrice;
		this.deliveryTime = deliveryTime;
	}

	public getId(): number {
		return this.id;
	}

	public setId(id: number): void {
		this.id = id;
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
}
