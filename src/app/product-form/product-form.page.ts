import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.page.html',
  styleUrls: ['./product-form.page.scss'],
  standalone: false,
})
export class ProductFormPage implements OnInit {
  form: FormGroup;
  productId = 0;
  savedId = 0;
  submitted = false;
  message = '';
  missingProduct = false;

  constructor(private builder: FormBuilder, private route: ActivatedRoute,
              private productservice: ProductService) {
    this.form = this.builder.group({
      name: ['', [Validators.required, Validators.pattern('.*\\S.*')]],
      category: [''],
      purchasePrice: ['', [Validators.required, Validators.pattern('^[0-9]+(\\.[0-9]+)?$'), Validators.min(Number.MIN_VALUE)]],
      sellingPrice: ['', [Validators.required, Validators.pattern('^[0-9]+(\\.[0-9]+)?$'), Validators.min(Number.MIN_VALUE)]],
      stock: [0, [Validators.required, Validators.pattern('^[0-9]+(\\.[0-9]+)?$'), Validators.min(0)]],
      imageUrl: ['']
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = 0;
      if (params['id'] != null) this.productId = Number(params['id']);
      this.loadForm();
    });
  }

  ionViewWillEnter() {
    this.loadForm();
  }

  loadForm() {
    this.submitted = false;
    this.message = '';
    this.savedId = 0;
    this.missingProduct = false;
    if (this.productId == 0) {
      this.form.reset({ name: '', category: '', purchasePrice: '', sellingPrice: '', stock: 0, imageUrl: '' });
    } else {
      const product = this.productservice.getProductById(this.productId);
      if (product == null) this.missingProduct = true;
      else this.form.patchValue(product);
    }
  }

  showError(field: string): boolean {
    const control = this.form.controls[field];
    return control.invalid && (control.dirty || control.touched || this.submitted);
  }

  saveProduct() {
    this.submitted = true;
    if (this.form.invalid || this.missingProduct) return;
    const data = {
      name: this.form.value.name, category: this.form.value.category,
      purchasePrice: Number(this.form.value.purchasePrice), sellingPrice: Number(this.form.value.sellingPrice),
      stock: Number(this.form.value.stock), imageUrl: this.form.value.imageUrl
    };
    if (this.productId == 0) {
      this.savedId = this.productservice.addProduct(data);
      this.productId = this.savedId;
    } else {
      this.productservice.updateProduct(this.productId, data);
      this.savedId = this.productId;
    }
    this.message = 'Produk berhasil disimpan.';
  }
}
