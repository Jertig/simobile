import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
  standalone: false,
})
export class TransactionsPage implements OnInit {
  transactions: any[] = [];

  constructor(private transactionservice: TransactionService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.transactions = this.transactionservice.transactions;
  }

  ionViewWillEnter() {
    this.transactions = this.transactionservice.transactions;
    this.changeDetector.detectChanges();
  }

  getDateText(date: Date): string {
    return this.transactionservice.getDateText(date);
  }

}
