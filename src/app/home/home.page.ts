import { ProductDetail } from './../models/productDetail';
import { ProductService } from './../services/product/product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  searchText = '';
  products: ProductDetail[];

  constructor(
    private productService: ProductService) {}

  ngOnInit() {}

  findProduct() {
    this.productService.findProducts(this.searchText).subscribe(res => {
      this.products = res.products;
    });
  }
}
