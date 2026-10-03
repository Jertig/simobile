import { Injectable } from '@angular/core';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  // Format data: date dan items berisi productId, quantity, price.
  transactions: any[] = [];

  constructor(private productservice: ProductService) { }

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
