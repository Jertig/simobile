import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.page.html',
  styleUrls: ['./transaction-detail.page.scss'],
  standalone: false,
})
export class TransactionDetailPage implements OnInit {
  transaction: any = null;
  transactionId = 0;

  constructor(private route: ActivatedRoute, private transactionservice: TransactionService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.transactionId = params['id'];
      this.transaction = this.transactionservice.getTransactionById(this.transactionId);
    });
  }

  ionViewWillEnter() {
    this.transaction = this.transactionservice.getTransactionById(this.transactionId);
  }

  getDateText(date: Date): string {
    return this.transactionservice.getDateText(date);
  }

}
