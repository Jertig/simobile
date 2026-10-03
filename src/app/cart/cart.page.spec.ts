import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { CartService } from '../cart.service';
import { TransactionService } from '../transaction.service';
import { CartPage } from './cart.page';

describe('CartPage', () => {
  let component: CartPage;
  let fixture: ComponentFixture<CartPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [RouterModule.forRoot([])] });
    fixture = TestBed.createComponent(CartPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('confirms through the button and disables another checkout when the cart is empty', async () => {
    TestBed.inject(CartService).addProduct(2);
    fixture.detectChanges();
    await fixture.whenStable();
    const button = fixture.nativeElement.querySelector('ion-button[expand="block"]');
    button.click();
    fixture.detectChanges();
    expect(TestBed.inject(TransactionService).transactions.length).toBe(1);
    expect(component.message).toContain('berhasil disimpan');
    expect(component.getTotal()).toBe(0);
    expect(button.disabled).toBe(true);
  });

  it('shows cart items and total, then removes an item through its button', async () => {
    const cart = TestBed.inject(CartService);
    cart.addProduct(1);
    cart.addProduct(1);
    cart.addProduct(2);
    expect(component.getTotal()).toBe(154000);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(fixture.nativeElement.textContent).toContain('154000');
    expect(fixture.nativeElement.textContent).toContain('Beras 5 kg');
    fixture.nativeElement.querySelector('ion-item ion-button').click();
    fixture.detectChanges();
    expect(component.getItems().length).toBe(1);
    expect(component.getTotal()).toBe(18000);
  });
});
