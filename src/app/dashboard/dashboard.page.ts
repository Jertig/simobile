import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})
export class DashboardPage implements OnInit {
  productCount = 0;
  transactionCount = 0;
  salesTotal = 0;
  bestSellingProduct = 'Belum ada penjualan';

  constructor(private productservice: ProductService,
              private transactionservice: TransactionService) { }

  ngOnInit() {
    this.loadSummary();
  }

  ionViewDidEnter() {
    this.loadSummary();
  }

  loadSummary() {
    this.productCount = this.productservice.getProductCount();
    const summary = this.transactionservice.getTodaySummary();
    this.transactionCount = summary.transactionCount;
    this.salesTotal = summary.salesTotal;
    this.bestSellingProduct = summary.bestSellingProduct;
  }

}
