import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  items: any[] = [];

  constructor(private cartservice: CartService, private transactionservice: TransactionService,
              private changeDetector: ChangeDetectorRef) { }

  confirmTransaction() {
    const transaction = this.transactionservice.confirmTransaction();
    this.items = this.cartservice.items;
    if (transaction == null) {
      this.message = 'Transaksi belum disimpan. Keranjang kosong atau stok tidak cukup.';
    } else {
      this.transactionId = transaction.id;
      this.message = 'Transaksi ' + transaction.id + ' berhasil disimpan. Total Rp ' + transaction.total + '.';
    }
  }

  getItems() {
    return this.items;
  }

  getTotal(): number {
    return this.cartservice.getTotal();
  }

  removeProduct(id: number) {
    this.cartservice.removeProduct(id);
    this.items = this.cartservice.items;
  }

  ngOnInit() {
    this.items = this.cartservice.items;
  }

  ionViewWillEnter() {
    this.items = this.cartservice.items;
    this.message = '';
    this.transactionId = 0;
    this.changeDetector.detectChanges();
  }

}
