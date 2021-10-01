import { Component, Inject, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Product } from '../type';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  items = this.cartService.getItems();
  product:any;
  isOpen: boolean = true;

  constructor( private cartService: CartService) { }

  ngOnInit(): void {

  }



  delete() {
    this.items.splice(this.items.indexOf(this.product), 1);
  }


  toOpen(): void {
    this.isOpen = false;
  }
  toClose(): void {
    this.isOpen = true;
  }
}
