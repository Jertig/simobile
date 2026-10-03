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

  constructor(private route: ActivatedRoute, private transactionservice: TransactionService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.transaction = this.transactionservice.getTransactionById(params['id']);
    });
  }

  getDateText(date: Date): string {
    return this.transactionservice.getDateText(date);
  }

}
