export interface Product {
	id: number,
	brand: string,
	name: string,
	price: number,
	price_sign: string,
	currency: string,
	image_link: string,
	description: string,
	rating: number,
	category: string,
	product_type: string,
	tag_list: string[],
	created_at: Date,
  isHidden: boolean;
}
