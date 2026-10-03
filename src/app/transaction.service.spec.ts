import { TestBed } from '@angular/core/testing';
import { TransactionService } from './transaction.service';

describe('TransactionService', () => {
  let service: TransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shows zero and no bestseller when there are no transactions', () => {
    const summary = service.getTodaySummary();
    expect(summary.transactionCount).toBe(0);
    expect(summary.salesTotal).toBe(0);
    expect(summary.bestSellingProduct).toBe('Belum ada penjualan');
  });

  it('counts only today and combines quantities from different transactions', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    service.transactions = [
      { date: new Date(), items: [{ productId: 1, quantity: 2, price: 68000 }] },
      { date: new Date(), items: [
        { productId: 1, quantity: 3, price: 68000 },
        { productId: 2, quantity: 4, price: 18000 }
      ] },
      { date: yesterday, items: [{ productId: 2, quantity: 99, price: 18000 }] }
    ];

    const summary = service.getTodaySummary();
    expect(summary.transactionCount).toBe(2);
    expect(summary.salesTotal).toBe(412000);
    expect(summary.bestSellingProduct).toBe('Beras 5 kg');
  });
});
