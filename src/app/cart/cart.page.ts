import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: false,
})
export class CartPage implements OnInit {

  constructor(private cartservice: CartService) { }

  getItems() {
    return this.cartservice.items;
  }

  getTotal(): number {
    return this.cartservice.getTotal();
  }

  removeProduct(id: number) {
    this.cartservice.removeProduct(id);
  }

  ngOnInit() {
  }

}
