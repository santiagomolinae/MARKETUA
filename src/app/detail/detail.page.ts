import { ProductDetail } from './../models/productDetail';
import { ProductService } from './../services/product/product.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  idProduct: string;
  product: ProductDetail;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService) {}

  ngOnInit() {
    this.findProduct();
  }

  findProduct() {
    this.idProduct = this.route.snapshot.paramMap.get('id');
    this.productService.productDetail(this.idProduct).subscribe(res => {
      this.product = res;
    });
  }
}
