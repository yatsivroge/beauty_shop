import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { MakeUpService } from '../services/make-up.service';
import { Product } from '../type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
	Name = '';
  SortByParam = '';
  p:number = 1;

  constructor(private makeUpService: MakeUpService, private cartService: CartService) {
    makeUpService.getProducts().subscribe((products: Product[]) => this.products = products);
  }


  ngOnInit(): void {
  }

  addtocart(product: any){
    this.cartService.addtoCart(product);
  }
}

