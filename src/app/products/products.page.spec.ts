import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsPage } from './products.page';
import { ProductService } from '../product.service';

describe('ProductsPage', () => {
  let component: ProductsPage;
  let fixture: ComponentFixture<ProductsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('uses the products from Product Service', () => {
    const service = TestBed.inject(ProductService);
    expect(component.products).toBe(service.products);
    expect(component.products.length).toBeGreaterThanOrEqual(10);
  });

  it('updates the list when the search text changes and restores it when cleared', async () => {
    await fixture.whenStable();
    const input = fixture.nativeElement.querySelector('ion-input');
    input.value = 'Kopi';
    input.dispatchEvent(new CustomEvent('ionInput'));
    fixture.detectChanges();
    await fixture.whenStable();
    expect(component.searchText).toBe('Kopi');
    expect(fixture.nativeElement.querySelectorAll('ion-list ion-item').length).toBe(1);
    expect(fixture.nativeElement.textContent).toContain('Kopi Sachet');

    input.value = 'tidak ada';
    input.dispatchEvent(new CustomEvent('ionInput'));
    fixture.detectChanges();
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelectorAll('ion-list ion-item').length).toBe(0);
    expect(fixture.nativeElement.textContent).toContain('Produk tidak ditemukan.');

    input.value = '';
    input.dispatchEvent(new CustomEvent('ionInput'));
    fixture.detectChanges();
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelectorAll('ion-list ion-item').length).toBe(10);
  });
});
