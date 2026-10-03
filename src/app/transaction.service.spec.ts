import { TestBed } from '@angular/core/testing';
import { TransactionService } from './transaction.service';
import { ProductService } from './product.service';
import { CartService } from './cart.service';

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

  it('checks out once, stores an independent snapshot, and updates stock and summary', () => {
    const cart = TestBed.inject(CartService);
    const products = TestBed.inject(ProductService);
    cart.addProduct(1);
    cart.addProduct(1);
    cart.addProduct(2);
    const transaction = service.confirmTransaction();
    expect(transaction?.id).toBe(1);
    expect(transaction?.total).toBe(154000);
    expect(transaction?.items.length).toBe(2);
    expect(products.getProductById(1)?.stock).toBe(18);
    expect(products.getProductById(2)?.stock).toBe(34);
    expect(cart.items.length).toBe(0);
    expect(service.confirmTransaction()).toBeNull();
    expect(service.transactions.length).toBe(1);
    cart.addProduct(1);
    products.getProductById(1)!.name = 'Changed name';
    expect(transaction?.items[0].quantity).toBe(2);
    expect(transaction?.items[0].name).toBe('Beras 5 kg');
    expect(service.getTodaySummary().salesTotal).toBe(154000);
  });

  it('rejects insufficient stock without changing any stock, cart, or history', () => {
    const cart = TestBed.inject(CartService);
    const products = TestBed.inject(ProductService);
    cart.addProduct(1);
    cart.addProduct(2);
    products.getProductById(2)!.stock = 0;
    expect(service.confirmTransaction()).toBeNull();
    expect(products.getProductById(1)?.stock).toBe(20);
    expect(cart.items.length).toBe(2);
    expect(service.transactions.length).toBe(0);
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
