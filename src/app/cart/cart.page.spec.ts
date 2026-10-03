import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { CartService } from '../cart.service';
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
