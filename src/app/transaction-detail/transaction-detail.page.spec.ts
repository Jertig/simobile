import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { TransactionDetailPage } from './transaction-detail.page';
import { CartService } from '../cart.service';
import { TransactionService } from '../transaction.service';

describe('TransactionDetailPage', () => {
  let fixture: ComponentFixture<TransactionDetailPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      providers: [{ provide: ActivatedRoute, useValue: { params: of({ id: '2' }) } }]
    });
  });

  it('uses the route ID to show the second transaction and its item subtotal', () => {
    const cart = TestBed.inject(CartService);
    const service = TestBed.inject(TransactionService);
    cart.addProduct(1);
    service.confirmTransaction();
    cart.addProduct(2);
    cart.addProduct(2);
    service.confirmTransaction();
    fixture = TestBed.createComponent(TransactionDetailPage);
    fixture.detectChanges();
    expect(fixture.componentInstance.transaction.id).toBe(2);
    expect(fixture.nativeElement.textContent).toContain('Gula Pasir 1 kg');
    expect(fixture.nativeElement.textContent).toContain('36000');
    expect(fixture.nativeElement.textContent).not.toContain('Beras 5 kg');
  });

  it('handles an unknown ID without rendering missing fields', () => {
    TestBed.overrideProvider(ActivatedRoute, { useValue: { params: of({ id: '999' }) } });
    fixture = TestBed.createComponent(TransactionDetailPage);
    fixture.detectChanges();
    expect(fixture.componentInstance.transaction).toBeNull();
    expect(fixture.nativeElement.textContent).toContain('Transaksi tidak ditemukan.');
  });
});
