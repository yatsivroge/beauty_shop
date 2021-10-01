import { Injectable } from '@angular/core';
import { Product } from '../type';

@Injectable({
  providedIn: 'root'
})
export class CartService {
	items: Product[] = [];
  product:any;
  itemsTotal = 0;

  constructor() { }

	 addToCart(product: Product) {
    this.items.push(product);
  }


  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
