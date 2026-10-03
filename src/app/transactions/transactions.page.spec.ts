import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { By } from '@angular/platform-browser';
import { TransactionsPage } from './transactions.page';
import { TransactionService } from '../transaction.service';
import { CartService } from '../cart.service';

describe('TransactionsPage', () => {
  let component: TransactionsPage;
  let fixture: ComponentFixture<TransactionsPage>;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [RouterModule.forRoot([])] });
    fixture = TestBed.createComponent(TransactionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => expect(component).toBeTruthy());
  it('updates the already rendered empty history after two separate checkouts', async () => {
    await fixture.whenStable();
    expect(fixture.nativeElement.textContent).toContain('Belum ada transaksi.');
    const cart = TestBed.inject(CartService);
    const service = TestBed.inject(TransactionService);
    cart.addProduct(1);
    service.confirmTransaction();
    component.ionViewWillEnter();
    expect(fixture.nativeElement.textContent).not.toContain('Belum ada transaksi.');
    expect(fixture.nativeElement.querySelectorAll('ion-list ion-item').length).toBe(1);
    const link = fixture.debugElement.query(By.directive(RouterLink)).injector.get(RouterLink);
    expect(TestBed.inject(Router).serializeUrl(link.urlTree!)).toBe('/transaction-detail/1');
    cart.addProduct(2);
    service.confirmTransaction();
    component.ionViewWillEnter();
    expect(fixture.nativeElement.querySelectorAll('ion-list ion-item').length).toBe(2);
    expect(fixture.nativeElement.textContent).toContain('68000');
    expect(fixture.nativeElement.textContent).toContain('18000');
  });
});
