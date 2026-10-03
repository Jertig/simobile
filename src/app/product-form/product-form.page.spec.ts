import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { ProductFormPage } from './product-form.page';
import { ProductService } from '../product.service';

describe('ProductFormPage', () => {
  let fixture: ComponentFixture<ProductFormPage>;
  let component: ProductFormPage;
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [RouterModule.forRoot([])],
      providers: [{ provide: ActivatedRoute, useValue: { params: of({}) } }] });
    fixture = TestBed.createComponent(ProductFormPage);
    component = fixture.componentInstance;
    service = TestBed.inject(ProductService);
    fixture.detectChanges();
  });

  function validForm() {
    component.form.setValue({ name: 'Susu', category: 'Minuman', purchasePrice: '5000',
      sellingPrice: '7000', stock: '4', imageUrl: '' });
  }

  it('saves a valid product with numeric prices and a unique ID', () => {
    validForm();
    component.saveProduct();
    expect(service.getProductCount()).toBe(11);
    expect(service.getProductById(11)).toEqual({ id: 11, name: 'Susu', category: 'Minuman',
      purchasePrice: 5000, sellingPrice: 7000, stock: 4, imageUrl: '' });
    component.saveProduct();
    expect(service.getProductCount()).toBe(11);
  });

  for (const [field, value] of [['name', ''], ['name', '   '], ['purchasePrice', '0'],
    ['purchasePrice', '-1'], ['purchasePrice', 'huruf'], ['sellingPrice', '0'],
    ['sellingPrice', '-1'], ['sellingPrice', 'huruf'], ['stock', '-1']]) {
    it('rejects invalid ' + field + ' ' + value + ' and preserves other fields', () => {
      validForm();
      component.form.controls[field].setValue(value);
      component.saveProduct();
      expect(component.form.controls[field].invalid).toBe(true);
      expect(component.showError(field)).toBe(true);
      expect(service.getProductCount()).toBe(10);
      expect(component.form.value.category).toBe('Minuman');
      expect(component.form.value.imageUrl).toBe('');
    });
  }

  it('edits an existing product without creating another product', () => {
    component.productId = 2;
    component.loadForm();
    expect(component.form.value.name).toBe('Gula Pasir 1 kg');
    component.form.patchValue({ name: 'Gula baru', stock: 0, sellingPrice: '20000' });
    component.saveProduct();
    expect(service.getProductCount()).toBe(10);
    expect(service.getProductById(2)?.name).toBe('Gula baru');
    expect(service.getProductById(2)?.stock).toBe(0);
    expect(service.getProductById(2)?.sellingPrice).toBe(20000);
  });

  it('starts another new product when the cached add page is reopened', () => {
    validForm();
    component.saveProduct();
    component.ionViewWillEnter();
    expect(component.productId).toBe(0);
    expect(component.savedId).toBe(0);
    expect(component.form.value.name).toBe('');
    validForm();
    component.form.patchValue({ name: 'Susu kedua' });
    component.saveProduct();
    expect(service.getProductCount()).toBe(12);
    expect(service.getProductById(11)?.name).toBe('Susu');
    expect(service.getProductById(12)?.name).toBe('Susu kedua');
  });

  it('does not save an unknown product ID', () => {
    component.productId = 999;
    component.loadForm();
    validForm();
    component.saveProduct();
    expect(component.missingProduct).toBe(true);
    expect(service.getProductCount()).toBe(10);
  });

  it('shows field errors through submit and retains valid text in the rendered form', async () => {
    await fixture.whenStable();
    const input = fixture.nativeElement.querySelector('ion-input[formControlName="category"]');
    input.value = 'Minuman';
    input.dispatchEvent(new CustomEvent('ionInput'));
    fixture.nativeElement.querySelector('form').dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    fixture.detectChanges();
    await fixture.whenStable();
    expect(fixture.nativeElement.textContent).toContain('Nama produk wajib diisi.');
    expect(input.value).toBe('Minuman');
    expect(service.getProductCount()).toBe(10);
  });
});
