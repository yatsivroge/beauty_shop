import { Component, OnInit } from '@angular/core';
import { MakeUpService } from '../services/make-up.service';
import { Product } from '../type';
import { CartService } from '../services/cart.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
	Name = '';
  SortByParam = '';
  p: number = 1;
  filterValue: string = 'price';
  isList: boolean = false;


  constructor(private makeUpService: MakeUpService, private cartService: CartService ) {
    makeUpService.getProducts().subscribe((products: Product[]) => this.products = products);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  ngOnInit(): void {
  }


  onFilter(event: any): void {
    const filterField = event.target;
    this.filterValue = filterField.options[filterField.selectedIndex].value;
  }

  onRatingFilter(event: any): void {
    const ratingValue = Number(event.target.value);
    console.log('ratingValue: ', ratingValue);
    if(!isNaN(ratingValue)) {
      this.products.forEach(product => {
        console.log('product.rating: ', Number(product.rating));
        console.log('!(Number(product.rating) >= ratingValue): ', !(Number(product.rating) >= ratingValue));
        product.isHidden = !(Number(product.rating) >= ratingValue);
      });
    }
  }

  findByPrice(): void {
    const fromValue: any = Number((<HTMLInputElement>document.getElementById("from-price")).value);
    const toValue: any = Number((<HTMLInputElement>document.getElementById("to-price")).value);
    this.products.forEach(product => {
      product.isHidden = !(!isNaN(fromValue) && (Number(product.price) > fromValue)) || !(!isNaN(toValue) && (Number(product.price) < toValue));
    });
  }

  toPalette(): void {
    this.isList = false;
  }

  toList(): void {
    this.isList = true;
  }

}

