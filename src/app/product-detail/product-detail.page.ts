import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
  standalone: false,
})
export class ProductDetailPage implements OnInit {
  product: any = null;
  cartMessage = '';

  constructor(private route: ActivatedRoute,
              private productservice: ProductService,
              private cartservice: CartService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.product = this.productservice.getProductById(params['id']);
      this.cartMessage = '';
    });
  }

  getImageUrl(): string {
    if (this.product == null || this.product.imageUrl == null || this.product.imageUrl == '') {
      return 'assets/no-image.jpg';
    }
    return this.product.imageUrl;
  }

  addToCart() {
    if (this.product == null) return;
    if (this.cartservice.addProduct(this.product.id)) {
      this.cartMessage = this.product.name + ' ditambahkan ke keranjang.';
    } else {
      this.cartMessage = 'Produk tidak bisa ditambahkan karena stok tidak cukup.';
    }
  }

}
