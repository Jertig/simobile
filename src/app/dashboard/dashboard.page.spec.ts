import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardPage } from './dashboard.page';
import { ProductService } from '../product.service';
import { TransactionService } from '../transaction.service';

describe('DashboardPage', () => {
  let component: DashboardPage;
  let fixture: ComponentFixture<DashboardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('refreshes the summary from services when the dashboard opens again', () => {
    const transactions = TestBed.inject(TransactionService);
    transactions.transactions = [
      { date: new Date(), items: [{ productId: 5, quantity: 2, price: 3500 }] }
    ];
    component.ionViewDidEnter();
    expect(component.productCount).toBe(TestBed.inject(ProductService).products.length);
    expect(component.transactionCount).toBe(1);
    expect(component.salesTotal).toBe(7000);
    expect(component.bestSellingProduct).toBe('Mie Instan Goreng');
  });
});
