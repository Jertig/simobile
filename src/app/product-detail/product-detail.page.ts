import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
  standalone: false,
})
export class ProductDetailPage implements OnInit {
  product: any = null;

  constructor(private route: ActivatedRoute,
              private productservice: ProductService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.product = this.productservice.getProductById(params['id']);
    });
  }

}
