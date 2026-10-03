import { Injectable } from '@angular/core';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: any[] = [];

  constructor(private productservice: ProductService) { }

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
