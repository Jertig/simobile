import { TestBed } from '@angular/core/testing';
import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('adds a product and increases its quantity instead of adding a duplicate row', () => {
    expect(service.addProduct(1)).toBe(true);
    expect(service.addProduct(1)).toBe(true);
    expect(service.items.length).toBe(1);
    expect(service.items[0].productId).toBe(1);
    expect(service.items[0].quantity).toBe(2);
    expect(service.items[0].price).toBe(68000);
  });

  it('rejects empty stock and unknown products', () => {
    expect(service.addProduct(3)).toBe(false);
    expect(service.addProduct(999)).toBe(false);
    expect(service.items.length).toBe(0);
  });

  it('totals quantities and keeps other products when removing a row', () => {
    expect(service.getTotal()).toBe(0);
    service.addProduct(1);
    service.addProduct(1);
    service.addProduct(2);
    expect(service.getTotal()).toBe(154000);
    service.removeProduct(1);
    expect(service.getTotal()).toBe(18000);
    expect(service.items[0].productId).toBe(2);
  });

  it('does not add a quantity greater than the available stock', () => {
    for (let i = 0; i < 5; i++) expect(service.addProduct(9)).toBe(true);
    expect(service.addProduct(9)).toBe(false);
    expect(service.items[0].quantity).toBe(5);
  });
});
