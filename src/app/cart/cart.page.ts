import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: false,
})
export class CartPage implements OnInit {
  message = '';
  transactionId = 0;

  constructor(private cartservice: CartService, private transactionservice: TransactionService) { }

  confirmTransaction() {
    const transaction = this.transactionservice.confirmTransaction();
    if (transaction == null) {
      this.message = 'Transaksi belum disimpan. Keranjang kosong atau stok tidak cukup.';
    } else {
      this.transactionId = transaction.id;
      this.message = 'Transaksi ' + transaction.id + ' berhasil disimpan. Total Rp ' + transaction.total + '.';
    }
  }

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
