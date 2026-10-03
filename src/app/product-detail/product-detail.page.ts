import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
  standalone: false,
})
export class ProductDetailPage implements OnInit {
  product: any = null;
  cartMessage = '';
  productId = 0;

  constructor(private route: ActivatedRoute,
              private productservice: ProductService,
              private cartservice: CartService,
              private animationCtrl: AnimationController) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      this.product = this.productservice.getProductById(this.productId);
      this.cartMessage = '';
    });
  }

  ionViewWillEnter() {
    this.product = this.productservice.getProductById(this.productId);
    this.cartMessage = '';
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
      this.animateProduct();
    } else {
      this.cartMessage = 'Produk tidak bisa ditambahkan karena stok tidak cukup.';
    }
  }

  animateProduct() {
    const element = document.querySelector('#product-image') as HTMLElement;
    if (element == null) return;
    const animation = this.animationCtrl.create()
      .addElement(element)
      .duration(350)
      .iterations(1)
      .keyframes([
        { offset: 0, transform: 'scale(1)' },
        { offset: 0.5, transform: 'scale(1.08)' },
        { offset: 1, transform: 'scale(1)' }
      ]);
    animation.play();
  }

}
