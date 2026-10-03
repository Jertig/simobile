import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('searches a literal part of the name without changing the product array', () => {
    expect(service.searchProducts('').length).toBe(10);
    const result = service.searchProducts('Pasir');
    expect(result.length).toBe(1);
    expect(result[0].id).toBe(2);
    expect(service.searchProducts('tidak ada').length).toBe(0);
    expect(service.searchProducts('[').length).toBe(0);
    expect(service.searchProducts('beras').length).toBe(0);
    expect(service.products.length).toBe(10);
  });

  it('has at least 10 valid products with different categories, prices and stocks', () => {
    expect(service.products.length).toBeGreaterThanOrEqual(10);
    let differentCategory = false;
    let differentPrice = false;
    let differentStock = false;
    let emptyStock = false;

    for (let i = 0; i < service.products.length; i++) {
      const product = service.products[i];
      expect(product.name.length).toBeGreaterThan(0);
      expect(product.category.length).toBeGreaterThan(0);
      expect(product.purchasePrice).toBeGreaterThan(0);
      expect(product.sellingPrice).toBeGreaterThan(0);
      expect(product.stock).toBeGreaterThanOrEqual(0);

      if (product.category != service.products[0].category) differentCategory = true;
      if (product.sellingPrice != service.products[0].sellingPrice) differentPrice = true;
      if (product.stock != service.products[0].stock) differentStock = true;
      if (product.stock == 0) emptyStock = true;

      for (let j = i + 1; j < service.products.length; j++) {
        expect(product.id).not.toBe(service.products[j].id);
      }
    }

    expect(differentCategory).toBe(true);
    expect(differentPrice).toBe(true);
    expect(differentStock).toBe(true);
    expect(emptyStock).toBe(true);
  });
});
