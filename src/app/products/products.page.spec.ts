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
});
