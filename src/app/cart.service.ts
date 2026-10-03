import { Injectable } from '@angular/core';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: any[] = [];

  constructor(private productservice: ProductService) { }

  getTotal(): number {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total += this.items[i].price * this.items[i].quantity;
    }
    return total;
  }

  clearCart() {
    this.items = [];
  }

  removeProduct(id: number) {
    const remaining: any[] = [];
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].productId != id) remaining.push(this.items[i]);
    }
    this.items = remaining;
  }

  addProduct(id: number): boolean {
    const product = this.productservice.getProductById(id);
    if (product == null || product.stock <= 0) return false;

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].productId == product.id) {
        if (this.items[i].quantity >= product.stock) return false;
        this.items[i].quantity++;
        return true;
      }
    }

    this.items.push({
      productId: product.id,
      name: product.name,
      quantity: 1,
      price: product.sellingPrice
    });
    return true;
  }
}
