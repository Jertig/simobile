import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  // Format data: id, date, total dan items berisi productId, name, quantity, price.
  transactions: any[] = [];
  nextId = 1;

  getTransactionById(id: number) {
    for (let i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].id == id) return this.transactions[i];
    }
    return null;
  }

  getDateText(date: Date): string {
    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  }

  constructor(private productservice: ProductService, private cartservice: CartService) { }

  confirmTransaction() {
    const cartItems = this.cartservice.items;
    if (cartItems.length == 0) return null;

    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
      const product = this.productservice.getProductById(item.productId);
      if (product == null || item.quantity <= 0 || item.quantity > product.stock) return null;
    }

    const soldItems: any[] = [];
    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
      soldItems.push({
        productId: item.productId,
        name: item.name,
        quantity: item.quantity,
        price: item.price
      });
    }

    const transaction = {
      id: this.nextId,
      date: new Date(),
      total: this.cartservice.getTotal(),
      items: soldItems
    };
    this.transactions.push(transaction);
    this.nextId++;
    for (let i = 0; i < soldItems.length; i++) {
      this.productservice.reduceStock(soldItems[i].productId, soldItems[i].quantity);
    }
    this.cartservice.clearCart();
    return transaction;
  }

  getTodaySummary() {
    const today = new Date();
    let transactionCount = 0;
    let salesTotal = 0;
    const soldQuantities: number[] = [];
    const products = this.productservice.products;

    for (let i = 0; i < products.length; i++) {
      soldQuantities.push(0);
    }

    for (let i = 0; i < this.transactions.length; i++) {
      const transaction = this.transactions[i];
      if (transaction.date.getDate() == today.getDate() &&
          transaction.date.getMonth() == today.getMonth() &&
          transaction.date.getFullYear() == today.getFullYear()) {
        transactionCount++;

        for (let j = 0; j < transaction.items.length; j++) {
          const item = transaction.items[j];
          salesTotal += item.price * item.quantity;

          for (let k = 0; k < products.length; k++) {
            if (products[k].id == item.productId) {
              soldQuantities[k] += item.quantity;
            }
          }
        }
      }
    }

    let bestSellingProduct = 'Belum ada penjualan';
    let highestQuantity = 0;
    for (let i = 0; i < products.length; i++) {
      if (soldQuantities[i] > highestQuantity) {
        highestQuantity = soldQuantities[i];
        bestSellingProduct = products[i].name;
      }
    }

    return {
      transactionCount: transactionCount,
      salesTotal: salesTotal,
      bestSellingProduct: bestSellingProduct
    };
  }
}
