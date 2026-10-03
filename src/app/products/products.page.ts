import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: false,
})
export class ProductsPage implements OnInit {
  products: any[] = [];
  searchText = '';

  constructor(private productservice: ProductService) { }

  ngOnInit() {
    this.products = this.productservice.products;
  }

  getProducts() {
    return this.productservice.searchProducts(this.searchText);
  }

}
