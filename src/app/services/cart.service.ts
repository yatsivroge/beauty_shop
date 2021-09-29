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

  calcCartTotal() {
    this.itemsTotal = 0
    this.items.forEach(item => {
      this.itemsTotal += (1 * item.price)
    })
  }


  saveCart() {
    localStorage.setItem("CartService", JSON.stringify(this.items));
  }

}
