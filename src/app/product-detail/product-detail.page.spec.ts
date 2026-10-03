import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { ProductDetailPage } from './product-detail.page';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

describe('ProductDetailPage', () => {
  let component: ProductDetailPage;
  let fixture: ComponentFixture<ProductDetailPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
    });
    fixture = TestBed.createComponent(ProductDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows a safe message when the route has no matching product', () => {
    expect(component.product).toBeNull();
    expect(fixture.nativeElement.textContent).toContain('Produk tidak ditemukan.');
  });

  it('uses the default image for an empty image URL and the product URL when present', () => {
    component.product = TestBed.inject(ProductService).getProductById(1);
    expect(component.getImageUrl()).toBe('assets/no-image.jpg');
    component.product.imageUrl = 'assets/icon/favicon.png';
    expect(component.getImageUrl()).toBe('assets/icon/favicon.png');
  });

  it('adds to the shared Cart Service and reports a successful click', () => {
    component.product = TestBed.inject(ProductService).getProductById(1);
    component.addToCart();
    expect(TestBed.inject(CartService).items[0].productId).toBe(1);
    expect(component.cartMessage).toContain('ditambahkan ke keranjang');
  });

  it('does not add a product with empty stock even when the method is called directly', () => {
    component.product = TestBed.inject(ProductService).getProductById(3);
    component.addToCart();
    expect(TestBed.inject(CartService).items.length).toBe(0);
    expect(component.cartMessage).toContain('stok tidak cukup');
  });
});
