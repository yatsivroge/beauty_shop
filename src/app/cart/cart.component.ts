import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();
  product:any;

  constructor(
    private cartService: CartService
  ) { }



  ngOnInit(): void {

  }

  delete() {
    this.items.splice(this.items.indexOf(this.product), 1);
  }



}
